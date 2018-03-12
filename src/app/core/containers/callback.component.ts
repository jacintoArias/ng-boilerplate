import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromAuth from '@app/auth/store';

@Component({
  selector: 'app-callback',
  template: ``,
  styles: [],
})
export class CallbackComponent implements OnInit {
  constructor(private store: Store<fromAuth.State>) {}

  public ngOnInit() {
    this.store.dispatch(new fromAuth.LoginHandle());
  }
}
