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
  public redirectUrl = '';

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires = new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(parsedToken && parsedToken.unique_name);
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
  // _tokenKey(_tokenKey: any, token: any) {
  //   throw new Error("Method not implemented.");
  // }

  logout() {
    if(this._user$.getValue()){
      localStorage.removeItem(this._tokenKey);
      this.user$.next(null);
    }
  }

  checkAvailabilityUserName = (email: string): Observable<boolean> =>
    this.http.get<boolean>(`${environment.Url}/account/checkusername`, {
      params: { email },
    });
}
