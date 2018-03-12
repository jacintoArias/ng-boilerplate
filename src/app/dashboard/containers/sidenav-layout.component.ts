import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import * as fromDashboard from '@app/dashboard/store';

@Component({
  selector: 'app-sidenav-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<mat-sidenav-container>

  <mat-sidenav mode="side" [opened]="showSidenav$ | async" class="mat-elevation-z4">
    <mat-nav-list>
      <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
    </mat-nav-list>
  </mat-sidenav>

  <mat-sidenav-content>
    <div class="wrapper">
      <ng-content></ng-content>
    </div>
  </mat-sidenav-content>

</mat-sidenav-container>
  `,
  styles: [
    `
    mat-sidenav-container {
      height: 100%;
    }

    .wrapper {
      padding: 15px;
    }
  `,
  ],
})
export class SidenavLayoutComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromDashboard.State>) {
    this.showSidenav$ = this.store.pipe(
      select(fromDashboard.getDashboardLayoutSidenav)
    );
  }
}
