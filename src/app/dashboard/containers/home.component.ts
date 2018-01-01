import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from '@app/core/services/user.service';
import { Openid } from '@app/core';

@Component({
  selector: 'app-home',
  template: `
    <div fxLayout="row" fxLayoutAlign="start stretch" fxLayoutGap="10px" class="home-wrapper">
      <app-user-details [profile]="profile$ | async" ></app-user-details>
    </div>
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
