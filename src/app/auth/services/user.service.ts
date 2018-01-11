import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { User } from 'app/core/index';
import * as fromAuth from '../store';

@Injectable()
export class UserService {

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  public getProfile(): Observable<User> {
    return this.store.select(fromAuth.getProfile);
  }
}
