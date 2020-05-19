import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, tap } from 'rxjs/operators';
import { Bike } from '../bike/bike.model';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  private _orders: Order[];
  private _orders$ = new BehaviorSubject<Order[]>([]);
  private _orderBike = new BehaviorSubject<Bike>(null);
  currentBikeOrder = this._orderBike.asObservable();

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

addOrder(order: Order){
  return this.http.post(`${environment.Url}/Order`,order.toJSON())
  .pipe(tap(console.log),catchError(this.handleError),map(Order.fromJSON))
  .pipe(
    catchError(err => {
      this._orders$.error(err);
      return throwError(err);
    })
  )
  .subscribe((order:Order) => {
    this._orders = [...this._orders,order];
    this._orders$.next(this._orders);
  })
}

changeBikeForOrder(bike: Bike){
  this._orderBike.next(bike);
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
