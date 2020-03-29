import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponent } from './bike.component';
import {MaterialModule} from '../material/material.module';
import {BikeListComponent} from './bike-list/bike-list.component'
import { Brand } from './brand';

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [BikeComponent,BikeListComponent],
  exports: [BikeListComponent] 
})
export class BikeModule { }
