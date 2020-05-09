import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponent } from './bike.component';
import {MaterialModule} from '../material/material.module';
import {BikeListComponent} from './bike-list/bike-list.component'
import { HttpClientModule } from '@angular/common/http';
import { BikeFilterPipe } from './bikeFilter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {AddBikeComponent} from './add-bike/add-bike.component';
import {RouterModule, Routes} from '@angular/router';

   const bikeRoutes : Routes = [
      {path: 'list', component: BikeListComponent},
      {path: 'add', component: AddBikeComponent}
   ];


@NgModule({
   imports: [
      CommonModule,
      MaterialModule,
      HttpClientModule,
      ReactiveFormsModule,
      RouterModule.forChild(bikeRoutes),
   ],
   declarations: [
      BikeComponent,
      BikeListComponent,
      BikeFilterPipe,
      AddBikeComponent,
   ],
   exports: [
      BikeListComponent,AddBikeComponent
   ]
})
export class BikeModule { }
