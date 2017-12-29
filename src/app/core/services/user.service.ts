import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Openid } from '@app/core';
import * as fromRoot from '@app/core/store';

@Injectable()
export class UserService {

  constructor(
    private store: Store<fromRoot.State>
  ) { }

  public getProfile(): Observable<Openid> {
    return this.store.select(fromRoot.getProfile);
  }
}
