import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '@app/auth';
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
      <router-outlet></router-outlet>
    </app-sidenav-layout>
  `,
  styles: []
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
    private layoutService: LayoutService,
  ) {}

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }

  logout() {
    this.authService.logout();
  }
}
