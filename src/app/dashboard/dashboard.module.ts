import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';
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
import { GithubApiService } from '@app/github/services/github-api.service';
import { GithubService } from '@app/github/services/github.service';
import { GithubUserInfoComponent } from './components/github-user-info.component';
import { GithubProfileSetterComponent } from './components/github-profile-setter.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
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
    GithubProfileSetterComponent,
  ],
  providers: [
    LayoutService,
    GithubApiService,
    GithubService,
  ]
})
export class DashboardModule { }
