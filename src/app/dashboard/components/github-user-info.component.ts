import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '@app/github/models';

@Component({
  selector: 'app-github-user-info',
  template: `
    <mat-card *ngIf="githubUser; else notfoundTemplate" >
      <mat-card-header>
        <div mat-card-avatar [ngStyle]="setAvatar()"></div>
        <mat-card-title>{{ githubUser.name }}</mat-card-title>
        <mat-card-subtitle>{{ githubUser.login }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          Github profile.
        </p>
      </mat-card-content>
    </mat-card>

    <ng-template #notfoundTemplate>
      <mat-card>
          <mat-card-header>
            <div mat-card-avatar></div>
            <mat-card-title>-</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p>
             {{ errorMessage }}
            </p>
          </mat-card-content>
      </mat-card>
    </ng-template>
  `,
  styles: []
})
export class GithubUserInfoComponent implements OnInit {

  @Input() githubUser: GithubUser;

  errorMessage = 'No github profile set!';

  constructor() { }

  ngOnInit() {
  }

  public setAvatar(picture) {
    return {
      'background-image': `url('${this.githubUser.avatar_url}')`,
      'background-size': 'cover',
    };
  }
}
