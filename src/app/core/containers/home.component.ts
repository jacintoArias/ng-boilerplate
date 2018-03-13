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
  <div class="wrapper" fxLayout="row" fxLayoutAlign="start" fxLayoutGap="10px" >
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap>
      <app-user-details [profile]="profile$ | async"></app-user-details>
    </div>
  </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  profile$: Observable<User>;

  constructor(private store: Store<fromRoot.State>) {
    this.profile$ = this.store.pipe(select(fromAuth.getAuthUserProfile));
  }

  ngOnInit(): void {}
}
