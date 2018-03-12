import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@app/shared';

import { reducers, effects } from './store/';
import { DashboardComponent } from './containers/dashboard.component';
import { HomeComponent } from './containers/home.component';
import { SidenavLayoutComponent } from './containers/sidenav-layout.component';
import { SidenavItemComponent } from './components/sidenav-item.component';
import { ToolbarComponent } from './components/toolbar.component';
import { ToolbarButtonComponent } from './components/toolbar-button.component';
import { UserDetailsComponent } from './components/user-details.component';
import { GithubUserInfoComponent } from './components/github-user-info.component';
import { GithubUserSetterComponent } from './components/github-user-setter.component';

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
    GithubUserInfoComponent,
    GithubUserSetterComponent,
  ],
  providers: [],
})
export class DashboardModule {}
