import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  private _orders: Order[];
  private _orders$ = new BehaviorSubject<Order[]>([]);

constructor(private http: HttpClient) {
  this.orders$.subscribe((orders:Order[]) => {
    this._orders = orders;
    this._orders$.next(this._orders);
  });
}

get allOrders$(): Observable<Order[]>{
  return this._orders$;
}

get orders$():Observable<Order[]>{
  return this.http.get(`${environment.Url}/Order`).pipe(
    catchError(this.handleError),map(
      (list:any[]):Order[] => list.map(Order.fromJSON)
    )
  );
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
