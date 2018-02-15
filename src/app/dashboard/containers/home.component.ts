import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@app/core/store';
import * as fromAuth from '@app/auth/store';
import * as fromGithub from '@app/github/store';
import { User } from '@app/auth/models';
import { GithubUserStatus, GithubUser } from '@app/github/models';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap>
      <app-user-details [profile]="profile$ | async"></app-user-details>
      <app-github-user-setter (setUser)="setGithubUser($event)"
                              (resetUser)="resetGithubUser()"
                              [githubUserStatus]="githubUserStatus$ | async">
      </app-github-user-setter>
      <app-github-user-info [githubUser]="(githubUser$ | async)"></app-github-user-info>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  profile$: Observable<User>;
  githubUser$: Observable<GithubUser>;
  githubUserStatus$: Observable<GithubUserStatus>;

  constructor(private store: Store<fromRoot.State>) {
    this.profile$ = this.store.select(fromAuth.getUserProfile);
    this.githubUser$ = this.store.select(fromGithub.getGithubUser);
    this.githubUserStatus$ = this.store.select(
      fromGithub.selectGithubUserStatus
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new fromGithub.UserLoad());
  }

  public setGithubUser(event) {
    this.store.dispatch(new fromGithub.UserSelect(event.user));
  }

  public resetGithubUser() {
    this.store.dispatch(new fromGithub.UserRemove());
  }
}
