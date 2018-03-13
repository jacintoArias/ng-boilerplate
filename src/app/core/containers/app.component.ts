import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@app/core/store';
import * as fromAuth from '@app/auth/store';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <app-toolbar class="mat-elevation-z6">
    <app-toolbar-button icon="menu" (navigate)="toggleSidenav()"></app-toolbar-button>
    <span fxFlex></span>
    <app-toolbar-button icon="lock" (navigate)="logout()"></app-toolbar-button>
  </app-toolbar>

  <app-sidenav>
    <router-outlet></router-outlet>
  </app-sidenav>
  `,
  styles: [],
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) {}

  toggleSidenav() {
    this.store.dispatch(new fromRoot.SidenavToggle());
  }

  logout() {
    this.store.dispatch(new fromAuth.Logout());
  }
}
