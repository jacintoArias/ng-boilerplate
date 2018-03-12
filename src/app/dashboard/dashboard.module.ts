import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@app/shared';

import { reducers, effects } from './store/';
import { containers } from './containers';
import { components } from './components';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [containers, components],
  providers: [],
})
export class DashboardModule {}
