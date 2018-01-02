import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-github-profile-setter',
  template: `
    <mat-card>
      <mat-card-content>
        <mat-card-title>Set a github profile</mat-card-title>
        <mat-card-content>
          <mat-input-container>
            <input matInput placeholder="github username" [value]="" (keyup)="submit.emit($event.target.value)">
          </mat-input-container>
        </mat-card-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class GithubProfileSetterComponent {

  // @Input() query = '';
  // @Input() searching = false;
  // @Input() error = '';
  @Output() submit = new EventEmitter<string>();

  constructor() { }

}
