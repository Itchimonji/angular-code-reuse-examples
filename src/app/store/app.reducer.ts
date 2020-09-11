import { Action, createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface State {
  number: number;
}

export const initialState: State = {
  number: -1
};


export const reducer = createReducer(
  initialState,
  on(AppActions.GetRandomNumberSuccess, (state, { data}) => ({
    ...state,
    number: data
  })),
);

export function getReducers(state: State | undefined, action: Action) {
  return reducer(state, action);
}

export const reduceRandomNumber = (state: State) => state.number;
