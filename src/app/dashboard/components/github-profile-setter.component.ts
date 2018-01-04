import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-github-profile-setter',
  template: `
    <mat-card>
      <mat-card-content>
        <mat-card-title>Set a github profile</mat-card-title>
        <mat-card-content>
          <form [formGroup]="form">
            <mat-form-field>
              <input matInput formControlName="username" placeholder="github username" [value]="userSelected">
              <mat-error *ngIf="!_userIsValid">Github user not found</mat-error>
            </mat-form-field>
            <div>
              <button mat-raised-button
                      type="submit"
                      color="primary"
                      [disabled]="form.pristine"
                      (click)="setUser.emit(form.value)">
                Set
              </button>
              <button mat-raised-button
                      type="button"
                      color="primary"
                      (click)="reset()">
                Remove
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

  _userIsValid: boolean;
  form: FormGroup = new FormGroup({
    username: new FormControl('', this.validateUsername.bind(this)),
  });

  @Input() userSelected = '';
  @Input() set userIsValid(value: boolean) {
    this._userIsValid = value;
    this.form.controls['username'].updateValueAndValidity({ emitEvent: true });
  }
  @Output() setUser = new EventEmitter<string>();
  @Output() resetUser = new EventEmitter<string>();

  constructor() {
  }

  public validateUsername(control: AbstractControl) {
    return  this._userIsValid ? null : { validUsername: true };
  }

  public reset() {
    this.form.reset({ emitEvent: true });
    this.resetUser.emit();
  }
}
