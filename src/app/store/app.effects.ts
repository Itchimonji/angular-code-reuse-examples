import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AppActions from './app.actions';
import {NumberService} from './services/number.service';

@Injectable()
export class AppEffects {

  constructor(private actions$: Actions,
              private numberService: NumberService) {}

  GetRandomNumber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.GetRandomNumber),
      concatMap(() =>
        this.numberService.getRandomNumber().pipe(
          map((data: number) => AppActions.GetRandomNumberSuccess( { data })),
          catchError((error: any) => of(AppActions.GetRandomNumberFailure( { error })))
        )
      )
    )
  );



}
