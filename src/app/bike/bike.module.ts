import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponent } from './bike.component';
import {MaterialModule} from '../material/material.module';
import {BikeListComponent} from './bike-list/bike-list.component'
import { HttpClientModule } from '@angular/common/http';
import { BikeFilterPipe } from './bikeFilter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {AddBikeComponent} from './add-bike/add-bike.component'

@NgModule({
   imports: [
      CommonModule,
      MaterialModule,
      HttpClientModule,
      ReactiveFormsModule,
   ],
   declarations: [
      BikeComponent,
      BikeListComponent,
      BikeFilterPipe,
      AddBikeComponent,
   ],
   exports: [
      BikeListComponent
   ]
})
export class BikeModule { }
