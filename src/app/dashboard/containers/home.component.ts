import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '@app/core/';
import { GithubService } from '@app/dashboard/services/github.service';
import { Openid } from '@app/core';
import { GithubStatus, GithubUser } from '@app/dashboard/models/github-user.model';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap >
      <app-user-details [profile]="profile$ | async" ></app-user-details>
      <app-github-profile-setter (setUser)="setGithubUser($event)"
                                 (resetUser)="resetGithubUser()"
                                 [validUsername]="(githubStatus$ | async).userIsValid"></app-github-profile-setter>
      <app-github-user-info [githubUser]="(githubUser$ | async)"></app-github-user-info>
    </div>
  `,
  styles: []
})
export class HomeComponent {

  profile$: Observable<Openid>;
  githubUser$: Observable<GithubUser>;
  githubStatus$: Observable<GithubStatus>;

  constructor(
    private userService: UserService,
    private githubService: GithubService,
  ) {
    this.profile$ = this.userService.getProfile();
    this.githubUser$ = this.githubService.getUser();
    this.githubStatus$ = this.githubService.getStatus();
  }

  public setGithubUser(event) {
    this.githubService.loadUser(event.username);
  }

  public resetGithubUser() {
    this.githubService.removeUser();
  }
}
