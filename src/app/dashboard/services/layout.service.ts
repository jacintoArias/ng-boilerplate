import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromDashboard from '../store';
import * as Layout from '../store/layout.actions';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LayoutService {

  constructor(
    private store: Store<fromDashboard.State>,
  ) { }

  public toggleSidenav() {
    this.store.dispatch(new Layout.SidenavToggle());
  }

  public getSidenavStatus(): Observable<boolean> {
    return this.store.select(fromDashboard.getSidenav);
  }
}
