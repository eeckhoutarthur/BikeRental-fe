import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BikeModule} from './bike/bike.module'
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { BikeListComponent } from './bike/bike-list/bike-list.component';
import { AddBikeComponent } from './bike/add-bike/add-bike.component';
import { PageNotFoundComponentComponent } from './PageNotFoundComponent/PageNotFoundComponent.component';

const appRoutes : Routes = [
   {path: 'bike/list', component:BikeListComponent},
   {path: 'bike/add', component:AddBikeComponent},
   {path: '', redirectTo:'bike/list', pathMatch:'full'},
   {path: '**', component: PageNotFoundComponentComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponentComponent
   ],
   imports: [
      BrowserModule,
      BikeModule,
      MaterialModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
