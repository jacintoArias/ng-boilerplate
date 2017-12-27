import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <mat-sidenav-container fullscreen>
      <mat-sidenav mode="push" [opened]="true">
        <mat-nav-list>
          <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
          <app-sidenav-item routerLink="/" icon="lock" hint="Log Out" ></app-sidenav-item>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
        </mat-toolbar>
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
`,
  styles: []
})
export class DashboardComponent {

  constructor() {
  }

  openSidenav() {
    // this.store.dispatch(new layout.OpenSidenav());
  }
}
