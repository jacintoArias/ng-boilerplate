import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@app/core/store';
import * as fromAuth from '@app/auth/store';
import { User } from '@app/auth/models';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="wrapper" fxLayout="row" fxLayoutAlign="start" fxLayoutGap="10px">
    <app-user-details fxFlex="noshrink" [profile]="user$ | async"></app-user-details>
  </div>
  `,
  styles: [
    `
    .wrapper {
      padding: 10px;
    }
  `,
  ],
})
export class HomeComponent implements OnInit {
  user$: Observable<User>;
  userLoading$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.user$ = this.store.pipe(select(fromAuth.getAuthUserProfile));
    this.userLoading$ = this.store.pipe(select(fromAuth.getAuthUserLoading));
  }

  ngOnInit(): void {}
}
