import { Component, Input } from '@angular/core';

import { User } from '@app/auth/models';

@Component({
  selector: 'app-user-details',
  template: `
    <mat-card *ngIf="profile; else notfoundTemplate">
      <mat-card-header>
        <div mat-card-avatar [ngStyle]="setAvatar()"></div>
        <mat-card-title>{{ profile.nickname }}</mat-card-title>
        <mat-card-subtitle>{{ profile.email }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <p>
          Our logged user.
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
  styles: [
    `
  `,
  ],
})
export class UserDetailsComponent {
  @Input() profile: User;

  errorMessage = 'Error Fetching the user profile.';

  constructor() {}

  public setAvatar() {
    return {
      'background-image': `url('${this.profile.picture}')`,
      'background-size': 'cover',
    };
  }
}
