import { Injectable } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import * as fromAuth from '../store';
import { Tokens } from '../models';

/*
  This service is need to be injected as a dependency into
  the Auth0 interceptor. See AuthModule

  wether this can be avoided or not using a better injection approach see #3

  Idelly the interceptor should make use of the store directly and the apporpiate
  selector (getAuthSessionIsAuthenticated)
 */
@Injectable()
export class TokenService {
  constructor(private store: Store<fromAuth.State>) {}

  public getAccessToken() {
    return this.store.pipe(select(fromAuth.getAuthSessionAccessToken), take(1));
  }
}
