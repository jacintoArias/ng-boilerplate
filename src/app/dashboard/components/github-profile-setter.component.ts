import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-github-profile-setter',
  template: `
    <mat-card>
      <mat-card-content>
        <mat-card-title>Set a github profile</mat-card-title>
        <mat-card-content>
          <form [formGroup]="form">
            <mat-form-field>
              <input matInput formControlName="username" placeholder="github username" [value]="">
              <mat-error *ngIf="validUsername">Github user not found</mat-error>
            </mat-form-field>
            <div>
              <button mat-raised-button
                      type="button"
                      color="primary"
                      [disabled]="form.pristine"
                      (click)="setUser.emit(form.value)" >
                Set
              </button>
              <button mat-raised-button
                      type="button"
                      color="primary"
                      [disabled]="form.pristine"
                      (click)="resetUser.emit()" >
                Reset
              </button>
            </div>
          </form>
        </mat-card-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: []
})
export class GithubProfileSetterComponent {

  @Input() validUsername = true;
  @Output() setUser = new EventEmitter<string>();
  @Output() resetUser = new EventEmitter<string>();

  form: FormGroup = new FormGroup({
    username: new FormControl('', this.validateUsername.bind(this)),
  });

  constructor() { }

  public validateUsername(control: AbstractControl) {
    return  this.validUsername ? null : { validUsername: true };
  }
}
