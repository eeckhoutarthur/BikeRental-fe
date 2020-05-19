import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ReactiveFormsModule } from '@angular/forms';

const orderRoutes : Routes = [
  {path: 'list', canActivate : [AuthGuard], component: OrderListComponent},
  {path: 'add', canActivate : [AuthGuard], component: AddOrderComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(orderRoutes)
  ],
  declarations: [OrderComponent,OrderListComponent,AddOrderComponent],
  exports: [OrderListComponent,AddOrderComponent]
})
export class OrderModule { }
