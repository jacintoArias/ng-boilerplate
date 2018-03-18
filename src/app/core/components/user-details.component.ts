import { Component, Input } from '@angular/core';

import { User } from '@app/auth/models';

@Component({
  selector: 'app-user-details',
  template: `

  <mat-card *ngIf="profile, else loadingTemplate">
    <mat-card-header>
      <div mat-card-avatar [ngStyle]="setAvatar()"></div>
      <mat-card-title>{{profile.nickname}}</mat-card-title>
      <mat-card-subtitle>{{profile.email}}</mat-card-subtitle>
    </mat-card-header>
    <mat-card-content>
        <p>Our logged user.</p>
    </mat-card-content>
  </mat-card>

  <ng-template #loadingTemplate>
    <mat-card>
      <app-loading-overlay></app-loading-overlay>
      <mat-card-header>
        <div mat-card-avatar class="mat-card-avatar-placeholder"></div>
        <mat-card-title>
          <app-text-placeholder width="15"></app-text-placeholder>
        </mat-card-title>
        <mat-card-subtitle>
          <app-text-placeholder width="12"></app-text-placeholder>
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <app-text-placeholder lines="3" width="12"></app-text-placeholder>
      </mat-card-content>
    </mat-card>
  </ng-template>
  `,
  styles: [``],
})
export class UserDetailsComponent {
  @Input() profile: User;

  constructor() {}

  public setAvatar() {
    return {
      'background-image': `url('${this.profile.picture}')`,
      'background-size': 'cover',
    };
  }
}
