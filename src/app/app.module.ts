import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PageNotFoundComponentComponent } from './PageNotFoundComponent/PageNotFoundComponent.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { UserModule } from './user/user.module';
import { httpInterceptorProviders } from './interceptor/providers';
import {AgmCoreModule} from '@agm/core';


@NgModule({
   declarations: [
      AppComponent,
      PageNotFoundComponentComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MaterialModule,
      ReactiveFormsModule,
      AgmCoreModule,
      UserModule,
      AppRoutingModule
   ],
   providers: [httpInterceptorProviders],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
