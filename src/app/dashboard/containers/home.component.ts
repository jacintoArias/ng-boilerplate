import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '@app/core/store';
import * as fromAuth from '@app/auth/store';
import { GithubService } from '@app/github/services/github.service';
import { User } from '@app/core';
import { GithubUserStatus, GithubUser } from '@app/github/models/github-user.model';

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
  styles: []
})
export class HomeComponent implements OnInit {

  profile$: Observable<User>;
  githubUser$: Observable<GithubUser>;
  githubUserStatus$: Observable<GithubUserStatus>;

  constructor(
    private store: Store<fromRoot.State>,
    private githubService: GithubService,
  ) {
    this.profile$ = this.store.select(fromAuth.getProfile);
    this.githubUser$ = this.githubService.getUserData();
    this.githubUserStatus$ = this.githubService.getUserStatus();
  }

  ngOnInit(): void {
    this.githubService.loadUser();
  }

  public setGithubUser(event) {
    this.githubService.selectUser(event.user);
  }

  public resetGithubUser() {
    this.githubService.removeUser();
  }
}
