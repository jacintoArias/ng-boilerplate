import { LayoutActions, LayoutActionTypes } from '../actions/layout.actions';

export interface State {
  sidenav: boolean;
}

const initialState: State = {
  sidenav: true,
};

export function reducer(state = initialState, action: LayoutActions): State {
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

export const getSidenav = (state: State) => state.sidenav;
