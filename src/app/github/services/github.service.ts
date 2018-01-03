import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import * as fromGithub from '../store';
import * as Github from '../store/github.actions';
import { GithubStatus, GithubUser } from '../models/github-user.model';

@Injectable()
export class GithubService {

  constructor(
    private store: Store<fromGithub.State>,
  ) { }

  public loadUser(username: string) {
   this.store.dispatch(new Github.LoadUser(username));
  }

  public removeUser() {
    this.store.dispatch(new Github.RemoveUser());
  }


  public getUser(): Observable<GithubUser> {
    return this.store.select(fromGithub.getGithubUser);
  }

  public getStatus(): Observable<GithubStatus> {
    return this.store.select(fromGithub.selectGithubStatus);
  }
}
