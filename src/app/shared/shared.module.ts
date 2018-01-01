import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
} from '@angular/material';

const materialModules = [
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ...materialModules,
  ],
  exports: [
    ...materialModules,
    FlexLayoutModule,
  ],
  declarations: []
})
export class SharedModule { }
