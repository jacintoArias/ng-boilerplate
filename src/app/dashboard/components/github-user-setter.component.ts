import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { getGithubUserStatusInit, GithubUserStatus } from '@app/github/models';

@Component({
  selector: 'app-github-user-setter',
  template: `
    <mat-card>
      <mat-card-content>
        <mat-card-title>Set a github profile</mat-card-title>
        <mat-card-content>
          <form [formGroup]="form">
            <mat-form-field>
              <input matInput formControlName="user" placeholder="github username" >
              <mat-error *ngIf="form.invalid">Github user not found</mat-error>
            </mat-form-field>
            <div>
              <button mat-raised-button
                      type="submit"
                      color="primary"
                      [disabled]="!isSubmittable()"
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
  styles: [],
})
export class GithubUserSetterComponent {
  form: FormGroup;
  _status: GithubUserStatus = getGithubUserStatusInit();

  // Push validator info through the form when value changes
  @Input()
  set githubUserStatus(value: GithubUserStatus) {
    this._status = value;
    this.form.patchValue(value);
    Object.keys(this.form.controls).forEach(control => {
      this.form.controls[control].updateValueAndValidity();
      this.form.controls[control].markAsTouched();
    });
  }
  @Output() setUser = new EventEmitter<string>();
  @Output() resetUser = new EventEmitter<string>();

  constructor() {
    this.form = new FormGroup({
      user: new FormControl('', this.validateUsername.bind(this)),
    });
  }

  public validateUsername(control: AbstractControl) {
    const userModified = this._status.user !== control.value;
    return this._status.userValid || userModified
      ? null
      : { validUsername: true };
  }

  public reset() {
    this.form.reset();
    this.resetUser.emit();
  }

  public isSubmittable(): boolean {
    return this.form.value.user;
  }
}
