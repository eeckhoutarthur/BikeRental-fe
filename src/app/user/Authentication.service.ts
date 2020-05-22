import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";

function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Token = token.split('.')[1];
  const base64 = base64Token.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private readonly _tokenKey = "currentUser";
  private _user$: BehaviorSubject<string>;
  private _role$: BehaviorSubject<string>;
  public redirectUrl = '';

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
      console.log(`Dit is het token ${parsedToken}`);
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);
    this._role$ = new BehaviorSubject<string>(parsedToken && parsedToken.Rol);

  }

  set tokenStorage(token) {
    localStorage.setItem(this._tokenKey, token);
  }

  get tokenStorage() {
    const localtoken = localStorage.getItem(this._tokenKey);
    return localtoken ? localtoken : "";
  }

  get user$() : BehaviorSubject<string>{
    return this._user$;
  }

  get role$() :  BehaviorSubject<string>{
    return this._role$;
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http
      .post(
        `${environment.Url}/account`,
        { email, password },
        { responseType: "text" }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            this.tokenStorage = token;
            this._user$.next(email);
            this._role$.next(parseJwt(localStorage.getItem(this._tokenKey)).Rol);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): Observable<boolean> {
    return this.http
      .post(
        `${environment.Url}/account/register`,
        {
          firstname,
          lastname,
          email,
          password,
          passwordConfirmation: password,
        },
        { responseType: "text" } //-> jwt token als tekstveld doorgeven
      )
      .pipe(
        map((token: any) => {
          if (token) {
            this.tokenStorage = token;
            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if(this._user$.getValue()){
      localStorage.removeItem(this._tokenKey);
      this.user$.next(null);
      this._role$.next("");
    }
  }

  checkAvailabilityUserName = (email: string): Observable<boolean> =>
    this.http.get<boolean>(`${environment.Url}/account/checkusername`, {
      params: { email },
    });
}
