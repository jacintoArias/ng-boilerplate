import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import { SharedModule } from '@app/shared';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { generateMockUser } from '@app/auth/models';

describe('UserDetailsComponent', () => {
  let comp: UserDetailsComponent;
  let fix: ComponentFixture<UserDetailsComponent>;
  let deb: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [SharedModule],
        declarations: [UserDetailsComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fix = TestBed.createComponent(UserDetailsComponent);
    comp = fix.componentInstance;
    deb = fix.debugElement;
  });

  it('should compile', () => {
    expect(comp).toBeTruthy();
  });

  it('should failsafe when no profile is present', () => {
    comp.profile = null;
    fix.detectChanges();
    expect(deb.nativeElement.textContent).toContain(comp.errorMessage);
  });

  it('should display the profile', () => {
    const mockedProfile = generateMockUser();
    comp.profile = mockedProfile;
    fix.detectChanges();

    expect(
      deb.query(By.css('mat-card-title')).nativeElement.textContent
    ).toContain(mockedProfile.nickname);
    expect(
      deb.query(By.css('mat-card-subtitle')).nativeElement.textContent
    ).toContain(mockedProfile.email);
    expect(
      deb.query(By.css('.mat-card-avatar')).styles['background-image']
    ).toContain(mockedProfile.picture);
  });
});
