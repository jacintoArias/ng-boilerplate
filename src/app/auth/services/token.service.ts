import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import * as fromAuth from '../store';
import { Tokens } from '../models';

/*
  This service is need to be injected as a dependency into
  the Auth0 interceptor. See AuthModule
 */
@Injectable()
export class TokenService {

  constructor(
    private store: Store<fromAuth.State>
  ) { }

  public getTokens(): Observable<Tokens> {
    return this.store.select(fromAuth.getTokens);
  }

  public getAccessToken() {
    return this.getTokens()
      .pipe(
        map(tokens => tokens.accessToken),
        take(1),
      );
  }


}
