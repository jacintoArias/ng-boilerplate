import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '@app/core/services/user.service';
import { Openid } from '@app/core';

@Component({
  selector: 'app-home',
  template: `
    <app-user-details [profile]="profile$ | async" ></app-user-details>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  profile$: Observable<Openid>;

  constructor(
    private userService: UserService,
  ) {
    this.profile$ = this.userService.getProfile();
  }

  ngOnInit() {
  }

}
