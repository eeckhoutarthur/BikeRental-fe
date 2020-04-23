import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponent } from './material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  declarations: [MaterialComponent],
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
