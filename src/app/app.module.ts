import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BikeModule} from './bike/bike.module'
import { MaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,BikeModule,MaterialModule,BrowserAnimationsModule,ReactiveFormsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
