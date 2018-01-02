import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromDashboard from '@app/dashboard/store';
import * as Github from '@app/dashboard/store/actions/github.actions';
import {GithubUser} from '@app/dashboard/models/github-user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(
    private store: Store<fromDashboard.State>,
  ) { }

  public loadUser(username: string) {
   this.store.dispatch(new Github.LoadUser(username));
  }

  public getUser(): Observable<GithubUser> {
    return this.store.select(fromDashboard.getGithubUser);
  }
}
