import { createAction, props } from '@ngrx/store';

export const GetRandomNumber = createAction(
  '[App] Get Random Number'
);

export const GetRandomNumberSuccess = createAction(
  '[App] Get Random Number Success',
  props<{ data: number }>()
);

export const GetRandomNumberFailure = createAction(
  '[App] Get Random Number Failure',
  props<{ error: any }>()
);
