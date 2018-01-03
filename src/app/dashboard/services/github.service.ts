import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromDashboard from '@app/dashboard/store';
import * as Github from '@app/dashboard/store/actions/github.actions';
import { GithubStatus, GithubUser } from '@app/dashboard/models/github-user.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GithubService {

  constructor(
    private store: Store<fromDashboard.State>,
  ) { }

  public loadUser(username: string) {
   this.store.dispatch(new Github.LoadUser(username));
  }

  public removeUser() {
    this.store.dispatch(new Github.RemoveUser());
  }


  public getUser(): Observable<GithubUser> {
    return this.store.select(fromDashboard.getGithubUser);
  }

  public getStatus(): Observable<GithubStatus> {
    return this.store.select(fromDashboard.getGithubStatus);
  }
}
