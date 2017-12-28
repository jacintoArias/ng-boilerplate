import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '@app/auth';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-sidenav-container fullscreen>

      <mat-sidenav mode="side" [opened]="showSidenav$ | async">
        <mat-nav-list>
          <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
          <app-sidenav-item (click)="logout()" icon="lock" hint="Log Out" ></app-sidenav-item>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <app-toolbar>
          
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
  ) {
    this.showSidenav$ = Observable.fromPromise(Promise.resolve(true));
  }

  toggleSidenav() {
    // this.store.dispatch(new layout.OpenSidenav());
  }

  logout() {
    this.authService.logout();
  }
}
