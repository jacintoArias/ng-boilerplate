import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import * as fromDashboard from '@app/dashboard/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-sidenav-layout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-sidenav-container class="mat-elevation-z6" >
      <mat-sidenav mode="side" [opened]="showSidenav$ | async" class="mat-elevation-z6" >
        <mat-nav-list>
          <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    mat-sidenav-container {
      height: 100vh;
    }
  `]
})
export class SidenavLayoutComponent {

  showSidenav$: Observable<boolean>;

  constructor(
    private store: Store<fromDashboard.State>,
  ) {
    this.showSidenav$ = this.store.select(fromDashboard.getSidenav);
  }

}
