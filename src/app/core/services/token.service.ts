import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import * as fromRoot from '../store/';
import { Tokens } from '../models/auth';

@Injectable()
export class TokenService {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  public getTokens(): Observable<Tokens> {
    return this.store.select(fromRoot.getTokens);
  }

  public getAccessToken() {
    return this.getTokens()
      .pipe(
        map(tokens => tokens.accessToken),
        take(1),
      );
  }


}
