import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserInfoComponent } from './github-user-info.component';
import { SharedModule } from '@app/shared';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { genGithubUserMock } from '@app/github';

describe('GithubUserInfoComponent', () => {
  let comp: GithubUserInfoComponent;
  let fix: ComponentFixture<GithubUserInfoComponent>;
  let deb: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
      ],
      declarations: [ GithubUserInfoComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fix = TestBed.createComponent(GithubUserInfoComponent);
    comp = fix.componentInstance;
    deb = fix.debugElement;

  });

  it('should compile', () => {
    expect(comp).toBeTruthy();
  });

  it('should failsafe when no profile is present', () => {
     comp.githubUser = null;
     fix.detectChanges();
     expect(deb.nativeElement.textContent)
      .toContain(comp.errorMessage);
  });

  it('should display the profile', () => {
    const mockedUser = genGithubUserMock();
    comp.githubUser = mockedUser;
    fix.detectChanges();

    expect(deb.query(By.css('mat-card-title')).nativeElement.textContent)
      .toContain(mockedUser.name);
    expect(deb.query(By.css('mat-card-subtitle')).nativeElement.textContent)
      .toContain(mockedUser.login);
    expect(deb.query(By.css('.mat-card-avatar')).styles['background-image'])
      .toContain(mockedUser.avatar_url);
  });

});

