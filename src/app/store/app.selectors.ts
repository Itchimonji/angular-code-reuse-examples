import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';
import {reduceRandomNumber} from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectRandomNumber = createSelector(
  selectAppState,
  reduceRandomNumber
);
