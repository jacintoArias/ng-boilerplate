import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromGithub from '../store';
import * as Github from '../store/actions/github.actions';
import { GithubUserStatus, GithubUser } from '../models/github-user.model';

@Injectable()
export class GithubService {

  constructor(
    private store: Store<fromGithub.State>,
  ) { }

  public selectUser(user: string) {
    this.store.dispatch(new Github.UserSelect(user));
  }

  public loadUser() {
   this.store.dispatch(new Github.UserLoad());
  }

  public removeUser() {
    this.store.dispatch(new Github.UserRemove());
  }


  public getUserData(): Observable<GithubUser> {
    return this.store.select(fromGithub.getGithubUser);
  }

  public getUserStatus(): Observable<GithubUserStatus> {
    return this.store.select(fromGithub.selectGithubUserStatus);
  }
}
