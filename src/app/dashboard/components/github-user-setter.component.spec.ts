import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedModule } from '@app/shared';
import { GithubUserSetterComponent } from './github-user-setter.component';
import { GithubService } from '@app/github';

describe('GithubUserSetterComponent', () => {
  let comp: GithubUserSetterComponent;
  let fix: ComponentFixture<GithubUserSetterComponent>;
  let deb: DebugElement;

  let inputUser: HTMLInputElement;
  let submitButton: HTMLButtonElement;
  let resetButton: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        SharedModule,
      ],
      declarations: [ GithubUserSetterComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fix = TestBed.createComponent(GithubUserSetterComponent);
    comp = fix.componentInstance;
    deb = fix.debugElement;

    inputUser = deb.query(By.css('input')).nativeElement;
    submitButton = deb.queryAll(By.css('button'))[0].nativeElement;
    resetButton = deb.queryAll(By.css('button'))[1].nativeElement;
  });

  it('should compile', () => {
    expect(comp).toBeTruthy();
  });

  it('should be empty, valid and not submittable when no status bound', () => {
     fix.detectChanges();
     testForm('', true, false);
  });

  it('should show empty user from store, be valid and not submittable', () => {
    const status = {
      user: '',
      userValid: true,
      userLoading: false,
    };
    comp.githubUserStatus = status;
    fix.detectChanges();
    testForm(status.user, status.userValid, false);
  });

  it('should show valid user from store, be valid and submittable', () => {
    const status = {
      user: 'selectedUser',
      userValid: true,
      userLoading: false,
    };
    comp.githubUserStatus = status;
    fix.detectChanges();
    testForm(status.user, status.userValid, true);
  });

  it('should show invalid user from store, be invalid and submittable', () => {
    const status = {
      user: 'selectedUser',
      userValid: false,
      userLoading: false,
    };
    comp.githubUserStatus = status;
    fix.detectChanges();
    testForm(status.user, status.userValid, true);
  });

  it('should transition from valid user to invalid from store, be invalid and submittable', fakeAsync(() => {
    const statusA = {
      user: 'selectedUser',
      userValid: false,
      userLoading: false,
    };
    comp.githubUserStatus = statusA;
    fix.detectChanges();
    tick();
    const status = {
      user: 'selectedUser',
      userValid: true,
      userLoading: false,
    };
    comp.githubUserStatus = status;
    fix.detectChanges();
    tick();
    testForm(status.user, status.userValid, true);
  }));

  it('should transition from invalid user to valid when typing, be valid and submittable', fakeAsync(() => {
    const statusA = {
      user: 'selectedUser',
      userValid: false,
      userLoading: false,
    };
    comp.githubUserStatus = statusA;
    fix.detectChanges();
    tick();
    const typedUser = 'newSelectedUser';
    inputUser.value = typedUser;
    inputUser.dispatchEvent(new Event('input'));
    fix.detectChanges();
    tick();
    testForm(typedUser, true, true);
  }));

  it('should emit setUser with form value user when submitted', fakeAsync(() => {
    const spy = spyOn(comp.setUser, 'emit');

    const status = {
      user: 'selectedUser',
      userValid: true,
      userLoading: false,
    };
    comp.githubUserStatus = status;
    fix.detectChanges();
    tick();
    submitButton.dispatchEvent(new Event('click'));
    fix.detectChanges();
    tick();
    expect(comp.setUser.emit).toHaveBeenCalledWith(Object({ user: status.user }));
  }));

  it('should emit resetUser and reset form when reset is clicked', fakeAsync(() => {
    const spy = spyOn(comp.resetUser, 'emit');

    const status = {
      user: 'selectedUser',
      userValid: true,
      userLoading: false,
    };
    comp.githubUserStatus = status;
    fix.detectChanges();
    tick();
    resetButton.dispatchEvent(new Event('click'));
    fix.detectChanges();
    tick();
    expect(comp.resetUser.emit).toHaveBeenCalledWith();
    testForm('', true, false);
  }));


  function getErrorElement(): DebugElement {
    return deb.query(By.css('mat-error'));
  }

  function testForm(user, valid, submittable) {
    expect(inputUser.value).toEqual(user, 'inputUser equal to model');
    expect(comp.form.valid).toBe(valid, 'Form validity');
    expect(submitButton.disabled).toBe(!submittable, 'Submit button disabled');
    if (valid) {
      expect(getErrorElement()).toBeFalsy('Error element not showing');
    } else {
      expect(getErrorElement()).toBeTruthy('Error element showing');
    }
  }
});

