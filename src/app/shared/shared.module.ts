import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatRadioModule,
  MatSliderModule
} from '@angular/material';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatRadioModule,
  MatSliderModule
];

@NgModule({
  imports: [
    CommonModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules,
  ],
  declarations: []
})
export class SharedModule { }
