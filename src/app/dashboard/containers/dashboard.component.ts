import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from '@app/auth';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-sidenav>
        <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
        <app-sidenav-item (click)="logout()" icon="lock" hint="Log Out" ></app-sidenav-item>
      </app-sidenav>
      <app-toolbar></app-toolbar>
      <router-outlet></router-outlet>
    </app-layout>
`,
  styles: []
})
export class DashboardComponent {

  constructor(
    private authService: AuthService,
  ) {
  }

  openSidenav() {
    // this.store.dispatch(new layout.OpenSidenav());
  }

  logout() {
    this.authService.logout();
  }
}
