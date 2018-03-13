import { LayoutAction, LayoutActionTypes } from '../actions/layout.actions';

export interface LayoutState {
  sidenav: boolean;
}

const initialState: LayoutState = {
  sidenav: true,
};

export function reducer(
  state = initialState,
  action: LayoutAction
): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.SidenavToggle:
      return {
        ...state,
        sidenav: !state.sidenav,
      };

    default:
      return state;
  }
}

export const getSidenav = (state: LayoutState) => state.sidenav;
