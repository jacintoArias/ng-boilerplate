import {
  Component,
  OnChanges,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-github-user-setter',
  template: `
    <mat-card>
      <mat-card-content>
        <mat-card-title>Set a github profile</mat-card-title>
        <mat-card-content>
          <form [formGroup]="form">
            <mat-form-field>
              <input matInput formControlName="username" placeholder="github username" >
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
export class GithubUserSetterComponent implements OnChanges {
  form: FormGroup;

  @Input() username: string;
  @Input() usernameValid: boolean;

  @Output() setUser = new EventEmitter<string>();
  @Output() resetUser = new EventEmitter<string>();

  constructor() {
    this.form = new FormGroup({
      username: new FormControl('', this.validateUsername.bind(this)),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.form.patchValue({ username: this.username });
    Object.keys(this.form.controls).forEach(control => {
      this.form.controls[control].updateValueAndValidity();
      this.form.controls[control].markAsTouched();
    });
  }

  public validateUsername(control: AbstractControl) {
    const userModified = this.username !== control.value;
    return this.username === '' || this.usernameValid || userModified
      ? null
      : { validUsername: true };
  }

  public reset() {
    this.form.reset();
    this.resetUser.emit();
  }

  public isSubmittable(): boolean {
    return this.form.value.username;
  }
}
