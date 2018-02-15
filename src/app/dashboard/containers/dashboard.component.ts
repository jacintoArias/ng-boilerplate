import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromAuth from '@app/auth/store';
import * as fromDashboard from '@app/dashboard/store';

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
  styles: [],
})
export class DashboardComponent {
  constructor(private store: Store<fromRoot.State>) {}

  toggleSidenav() {
    this.store.dispatch(new fromDashboard.SidenavToggle());
  }

  logout() {
    this.store.dispatch(new fromAuth.Logout());
  }
}
