import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { Order } from '../order.model';
import { OrderDataService } from '../order-data.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  private _fetchOrders$: Observable<Order[]>;
  public errorMessage: string = "";

  constructor(private _orderDataService: OrderDataService) { }

  ngOnInit() {
    this._fetchOrders$ = this._orderDataService.allOrders$.pipe(
      catchError(error => {
        this.errorMessage = error;
        return EMPTY
      })
    );
  }

  get orders$(): Observable<Order[]>{
    return this._fetchOrders$;
  }

}
