import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store, select } from '@ngrx/store';

import * as fromRoot from '@app/core/store';

@Component({
  selector: 'app-sidenav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <mat-sidenav-container>

    <mat-sidenav mode="side" [opened]="showSidenav$ | async" class="mat-elevation-z4">
      <mat-nav-list>
        <app-sidenav-item routerLink="/" icon="home" hint="Home" ></app-sidenav-item>
      </mat-nav-list>
    </mat-sidenav>

    <mat-sidenav-content>
      <ng-content></ng-content>
    </mat-sidenav-content>

  </mat-sidenav-container>
  `,
  styles: [
    `
    mat-sidenav-container {
      height: 100%;
    }

    mat-sidenav {
       min-width: 200px;
    }
  `,
  ],
})
export class SidenavComponent {
  showSidenav$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.showSidenav$ = this.store.pipe(select(fromRoot.getLayoutSidenav));
  }
}
