import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './containers/dashboard.component';
import { LayoutComponent } from './components/layout.component';
import { HomeComponent } from './containers/home.component';
import { SidenavComponent } from './components/sidenav.component';
import { SidenavItemComponent } from './components/sidenav-item.component';
import { ToolbarComponent } from './components/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    LayoutComponent,
    DashboardComponent,
    HomeComponent,
    SidenavComponent,
    SidenavItemComponent,
    ToolbarComponent,
  ]
})
export class DashboardModule { }
