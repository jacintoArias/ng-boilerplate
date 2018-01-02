import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '@app/core/services/user.service';
import { GithubService } from '@app/dashboard/services/github.service';
import { Openid } from '@app/core';
import { GithubUser } from '@app/dashboard/models/github-user.model';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap >
      <app-user-details [profile]="profile$ | async" ></app-user-details>
      <app-github-profile-setter (submit)="setGithubUser($event)"></app-github-profile-setter>
      <app-github-user-info [githubUser]="githubUser$ | async"></app-github-user-info>
    </div>
  `,
  styles: []
})
export class HomeComponent {

  profile$: Observable<Openid>;
  githubUser$: Observable<GithubUser>;

  constructor(
    private userService: UserService,
    private githubService: GithubService,
  ) {
    this.profile$ = this.userService.getProfile();
    this.githubUser$ = this.githubService.getUser();
  }

  private setGithubUser(username) {
    this.githubService.loadUser(username);
  }
}
