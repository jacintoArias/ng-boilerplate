import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';

import {GithubUser} from 'app/github/models/github-user.model';

const GITHUB_API_URL = 'https://api.github.com/';
const GITHUB_API_USERS = 'users/';

@Injectable()
export class GithubApiService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUser(username: string): Observable<GithubUser> {
    return this.http.get<GithubUser>(`${GITHUB_API_URL}${GITHUB_API_USERS}${username}`);
  }
}
