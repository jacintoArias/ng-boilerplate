import { Component, Input } from '@angular/core';
import { Openid } from '@app/core';

@Component({
  selector: 'app-user-details',
  template: `
    <mat-card>
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
  `,
  styles: [`
  `]
})
export class UserDetailsComponent {

  @Input() profile: Openid;

  constructor() { }

  public setAvatar() {
    return {
      'background-image': `url('${this.profile.picture}')`,
      'background-size': 'cover',
    };
  }

}
