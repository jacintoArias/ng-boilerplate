import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@app/core/store';
import * as fromAuth from '@app/auth/store';
import * as fromGithub from '@app/github/store';
import { User } from '@app/auth/models';
import { GithubProfile } from '@app/github/models';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="wrapper" fxLayout="row" fxLayoutAlign="start" fxLayoutGap="10px" >
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap>
      <app-user-details [profile]="profile$ | async"></app-user-details>
      <app-github-user-setter (setUser)="setGithubUser($event)"
                              (resetUser)="resetGithubUser()"
                              [username]="githubUsername$ | async"
                              [usernameValid]="githubUsernameValid$ | async">
      </app-github-user-setter>
      <app-github-user-info [githubUser]="(githubProfileData$ | async)"></app-github-user-info>
    </div>
  </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  profile$: Observable<User>;
  githubProfileData$: Observable<GithubProfile>;
  githubUsername$: Observable<string>;
  githubUsernameValid$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.profile$ = this.store.pipe(select(fromAuth.getAuthUserProfile));
    this.githubProfileData$ = this.store.pipe(
      select(fromGithub.getGithubDataProfile)
    );
    this.githubUsername$ = this.store.pipe(
      select(fromGithub.getGithubServiceUsername)
    );
    this.githubUsernameValid$ = this.store.pipe(
      select(fromGithub.getGithubServiceUsernameValid)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(new fromGithub.LoadData());
  }

  public setGithubUser(event) {
    this.store.dispatch(new fromGithub.SetUsername(event.username));
  }
  public resetGithubUser() {
    this.store.dispatch(new fromGithub.SetUsername(''));
  }
}
