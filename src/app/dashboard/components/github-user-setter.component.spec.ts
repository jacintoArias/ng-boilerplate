import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedModule } from '@app/shared';
import { GithubUserSetterComponent } from './github-user-setter.component';

describe('GithubUserSetterComponent', () => {
  let comp: GithubUserSetterComponent;
  let fix: ComponentFixture<GithubUserSetterComponent>;
  let deb: DebugElement;

  let inputUser: HTMLInputElement;
  let submitButton: HTMLButtonElement;
  let resetButton: HTMLButtonElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [NoopAnimationsModule, SharedModule],
        declarations: [GithubUserSetterComponent],
      }).compileComponents();
    })
  );

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

  it('should be empty, valid and not submittable when no tokens bound', () => {
    fix.detectChanges();
    testForm('', true, false);
  });

  it('should show empty user from store, be valid and not submittable', () => {
    const username = '';
    const usernameValid = false;

    comp.username = username;
    comp.usernameValid = usernameValid;
    fix.detectChanges();
    testForm(username, usernameValid, false);
  });

  it('should show valid user from store, be valid and submittable', () => {
    const username = 'selectedUser';
    const usernameValid = true;

    comp.username = username;
    comp.usernameValid = usernameValid;
    fix.detectChanges();
    testForm(username, usernameValid, true);
  });

  it('should show invalid user from store, be invalid and submittable', () => {
    const username = 'selectedUser';
    const usernameValid = false;

    comp.username = username;
    comp.usernameValid = usernameValid;
    fix.detectChanges();
    testForm(username, usernameValid, true);
  });

  it(
    'should transition from valid user to invalid from store, be invalid and submittable',
    fakeAsync(() => {
      const usernameA = 'selectedUser';
      const usernameValidA = false;

      comp.username = usernameA;
      comp.usernameValid = usernameValidA;
      fix.detectChanges();
      tick();

      const usernameB = 'selectedUser';
      const usernameValidB = true;

      comp.username = usernameB;
      comp.usernameValid = usernameValidB;
      fix.detectChanges();
      tick();
      testForm(usernameB, usernameValidB, true);
    })
  );

  it(
    'should transition from invalid user to valid when typing, be valid and submittable',
    fakeAsync(() => {
      const username = 'selectedUser';
      const usernameValid = false;

      comp.username = username;
      comp.usernameValid = usernameValid;
      fix.detectChanges();
      tick();

      const typedUser = 'newSelectedUser';
      inputUser.value = typedUser;
      inputUser.dispatchEvent(new Event('input'));
      fix.detectChanges();
      tick();
      testForm(typedUser, true, true);
    })
  );

  it(
    'should emit setUser with form value user when submitted',
    fakeAsync(() => {
      const spy = spyOn(comp.setUser, 'emit');
      const username = 'selectedUser';
      const usernameValid = true;

      comp.username = username;
      comp.usernameValid = usernameValid;
      fix.detectChanges();
      tick();
      submitButton.dispatchEvent(new Event('click'));
      fix.detectChanges();
      tick();
      expect(comp.setUser.emit).toHaveBeenCalledWith(
        Object({ user: username })
      );
    })
  );

  it(
    'should emit resetUser and reset form when reset is clicked',
    fakeAsync(() => {
      const spy = spyOn(comp.resetUser, 'emit');
      const username = 'selectedUser';
      const usernameValid = true;

      comp.username = username;
      comp.usernameValid = usernameValid;
      fix.detectChanges();
      tick();
      resetButton.dispatchEvent(new Event('click'));
      fix.detectChanges();
      tick();
      expect(comp.resetUser.emit).toHaveBeenCalledWith();
      testForm('', true, false);
    })
  );

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
