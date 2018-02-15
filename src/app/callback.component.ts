import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromAuth from '@app/auth/store';

@Component({
  selector: 'app-callback',
  template: ``,
  styles: [],
})
export class CallbackComponent {
  constructor(private store: Store<fromAuth.State>) {
    this.store.dispatch(new fromAuth.LoginHandle());
  }
}
