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
import { AuthGuard } from '../user/auth.guard';
import {AgmCoreModule} from '@agm/core';
import { ContactComponent } from './contact/contact.component';
import {AgmDirectionModule} from 'agm-direction';

   const bikeRoutes : Routes = [
      {path: 'list', component: BikeListComponent},
      {path: 'add', canActivate : [AuthGuard],component: AddBikeComponent},
      {path: 'contact', component: ContactComponent}
   ];


@NgModule({
   imports: [
      CommonModule,
      MaterialModule,
      HttpClientModule,
      ReactiveFormsModule,
      AgmCoreModule.forRoot({
         apiKey: "AIzaSyDM9IuMt3cJARapLW87pe7-Zj9_zGW9gww",
         libraries: ['geometry']
      }),
      AgmDirectionModule,
      RouterModule.forChild(bikeRoutes),
   ],
   declarations: [
      BikeComponent,
      BikeListComponent,
      BikeFilterPipe,
      AddBikeComponent,
      ContactComponent
   ],
   exports: [
      BikeListComponent,AddBikeComponent,AgmCoreModule
   ]
})
export class BikeModule { }
