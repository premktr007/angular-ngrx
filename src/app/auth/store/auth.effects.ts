import { loginStart, loginSuccess } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService
          .signUp(action.email, action.password)
          .pipe(map((data) => loginSuccess()));
      })
    );
  });
}