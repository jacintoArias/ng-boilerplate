import { Action } from '@ngrx/store';
import { Tokens } from 'app/auth/models/tokens';

export enum LayoutActionTypes {
  SidenavToggle = '[Dashboard] SidenavToggle',
}

export class SidenavToggle implements Action {
  readonly type = LayoutActionTypes.SidenavToggle;
}

export type LayoutAction = SidenavToggle;
