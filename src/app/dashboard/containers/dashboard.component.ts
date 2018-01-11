import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromRoot from '@app/core/store/reducers/index';
import * as fromAuth from '@app/auth/store';
import { LayoutService } from '@app/dashboard/services/layout.service';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-toolbar>
      <app-toolbar-button icon="menu" (navigate)="toggleSidenav()"></app-toolbar-button>
      <app-toolbar-button icon="lock" (navigate)="logout()"></app-toolbar-button>
    </app-toolbar>

    <app-sidenav-layout>
      <div class="dashboard-wrapper">
        <router-outlet></router-outlet>
      </div>
    </app-sidenav-layout>
  `,
  styles: []
})
export class DashboardComponent {

  constructor(
    private store: Store<fromRoot.State>,
    private layoutService: LayoutService,
  ) {}

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }

  logout() {
    this.store.dispatch(new fromAuth.Logout());
  }
}
