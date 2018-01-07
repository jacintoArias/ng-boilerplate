import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '@app/core/';
import { GithubService } from '@app/github/services/github.service';
import { Openid } from '@app/core';
import { GithubUserStatus, GithubUser } from '@app/github/models/github-user.model';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap>
      <app-user-details [profile]="profile$ | async"></app-user-details>
      <app-github-profile-setter (setUser)="setGithubUser($event)"
                                 (resetUser)="resetGithubUser()"
                                 [githubUserStatus]="githubUserStatus$ | async">
      </app-github-profile-setter>
      <app-github-user-info [githubUser]="(githubUser$ | async)"></app-github-user-info>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  profile$: Observable<Openid>;
  githubUser$: Observable<GithubUser>;
  githubUserStatus$: Observable<GithubUserStatus>;

  constructor(
    private userService: UserService,
    private githubService: GithubService,
  ) {
    this.profile$ = this.userService.getProfile();
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
