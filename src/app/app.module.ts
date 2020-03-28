import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BikeModule} from './bike/bike.module'

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,BikeModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
