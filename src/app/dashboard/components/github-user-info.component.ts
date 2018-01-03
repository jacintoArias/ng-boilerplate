import { Component, Input, OnInit } from '@angular/core';
import { GithubUser } from '@app/github/models/github-user.model';

@Component({
  selector: 'app-github-user-info',
  template: `
    <mat-card *ngIf="githubUser; else notfoundTemplate" >
      <mat-card-header>
        <div mat-card-avatar [ngStyle]="setAvatar()"></div>
        <mat-card-title>{{ githubUser.name }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>
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
              No github profile set!
            </p>
          </mat-card-content>
      </mat-card>
    </ng-template>
  `,
  styles: []
})
export class GithubUserInfoComponent implements OnInit {

  @Input() githubUser: GithubUser;

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
