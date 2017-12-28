import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '@app/auth';
import { LayoutService } from '@app/dashboard/services/layout.service';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-sidenav-container fullscreen>

      <mat-sidenav mode="side" [opened]="showSidenav$ | async">
        <mat-nav-list>
          <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
          <app-sidenav-item (navigate)="logout()" icon="lock" hint="Log Out" ></app-sidenav-item>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-toolbar>
          <span>Jarias Angular Boilerplate</span>
          <app-toolbar-button icon="menu" (navigate)="toggleSidenav()"></app-toolbar-button>
        </app-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>

    </mat-sidenav-container>
`,
  styles: []
})
export class DashboardComponent {

  showSidenav$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private layoutService: LayoutService,
  ) {
    this.showSidenav$ = this.layoutService.getSidenavStatus();
  }

  toggleSidenav() {
    this.layoutService.toggleSidenav();
  }

  logout() {
    this.authService.logout();
  }
}
