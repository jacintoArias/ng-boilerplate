import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './containers/dashboard.component';
import { HomeComponent } from './containers/home.component';
import { SidenavItemComponent } from './components/sidenav-item.component';
import { ToolbarComponent } from './components/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidenavItemComponent,
    ToolbarComponent,
  ]
})
export class DashboardModule { }
