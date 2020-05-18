import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';
import { OrderListComponent } from './order-list/order-list.component';

const orderRoutes : Routes = [
  {path: 'list', canActivate : [AuthGuard], component: OrderListComponent}
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(orderRoutes)
  ],
  declarations: [OrderComponent,OrderListComponent],
  exports: [OrderListComponent]
})
export class OrderModule { }
