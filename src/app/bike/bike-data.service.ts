import { Injectable } from '@angular/core';
import{Bike} from './bike.model'
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError,tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BikeDataService {
  private _bikes : Bike[];
  private _bikes$ = new BehaviorSubject<Bike[]>([]);

constructor(private http: HttpClient) { 
  this.bikes$.subscribe((bikes:Bike[]) => {
    this._bikes = bikes;
    this._bikes$.next(this._bikes);
  });
}

get allBikes$(): Observable<Bike[]>{
  return this._bikes$;
}

get bikes$(): Observable<Bike[]>{
  return this.http.get(`${environment.Url}/Bikes`).pipe(
    catchError(this.handleError),
    map(
      (list: any[]): Bike[] => list.map(Bike.fromJSON)             
    )
  );
}

addBike(bike: Bike){
  return this.http.post(`${environment.Url}/Bikes`,bike.toJSON())
  .pipe(tap(console.log),catchError(this.handleError),map(Bike.fromJSON))
  .pipe(
    catchError(err => {
      this._bikes$.error(err);
      return throwError(err);
    })
  )
  .subscribe((rec:Bike) => {
    this._bikes = [...this._bikes, rec];
    this._bikes$.next(this._bikes);
    });
  }

  handleError(error:any) : Observable<never>{
    let errorMessage: string;
    if (error instanceof HttpErrorResponse) {
      errorMessage = `'${error.status} ${error.statusText}' when accessing '${error.url}'`;
      console.error(error);
    } else {
      errorMessage = `an unknown error occurred ${error}`;
    }
    return throwError(errorMessage);
  }
}
