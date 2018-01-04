import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '@app/core/';
import { GithubService } from '@app/github/services/github.service';
import { Openid } from '@app/core';
import { GithubStatus, GithubUser } from '@app/github/models/github-user.model';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" fxLayoutWrap>
      <app-user-details [profile]="profile$ | async"></app-user-details>
      <app-github-profile-setter (setUser)="setGithubUser($event)"
                                 (resetUser)="resetGithubUser()"
                                 [userIsValid]="(githubStatus$ | async).userIsValid"
                                 [userSelected]="(githubStatus$ | async).userSelected">
      </app-github-profile-setter>
      <app-github-user-info [githubUser]="(githubUser$ | async)"></app-github-user-info>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  profile$: Observable<Openid>;
  githubUser$: Observable<GithubUser>;
  githubStatus$: Observable<GithubStatus>;

  constructor(
    private userService: UserService,
    private githubService: GithubService,
  ) {
    this.profile$ = this.userService.getProfile();
    this.githubUser$ = this.githubService.getUserData();
    this.githubStatus$ = this.githubService.getStatus();
  }

  ngOnInit(): void {
    this.githubService.loadUser();
  }

  public setGithubUser(event) {
    this.githubService.selectUser(event.username);
  }

  public resetGithubUser() {
    this.githubService.removeUser();
  }
}
