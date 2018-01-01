import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutService } from './services/layout.service';
import { DashboardComponent } from './containers/dashboard.component';
import { HomeComponent } from './containers/home.component';
import { SidenavLayoutComponent } from './containers/sidenav-layout.component';
import { SidenavItemComponent } from './components/sidenav-item.component';
import { ToolbarComponent } from './components/toolbar.component';
import { ToolbarButtonComponent } from './components/toolbar-button.component';
import { UserDetailsComponent } from './components/user-details.component';

import { reducers, effects } from './store/';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidenavItemComponent,
    ToolbarComponent,
    ToolbarButtonComponent,
    UserDetailsComponent,
    SidenavLayoutComponent,
  ],
  providers: [
    LayoutService,
  ]
})
export class DashboardModule { }
