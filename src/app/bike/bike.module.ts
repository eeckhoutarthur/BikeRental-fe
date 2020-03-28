import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeComponent } from './bike.component';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [CommonModule,MaterialModule],
  declarations: [BikeComponent],
  exports: [BikeComponent] //Zo kan de app.component de BikeComponent gebruiker
})
export class BikeModule { }
