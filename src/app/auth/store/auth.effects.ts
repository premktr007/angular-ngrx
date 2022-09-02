import { autoLogin, autoLogout, loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { setErrorMsg, setLoading } from 'src/app/shared/store/shared.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            this.store.dispatch(setErrorMsg({ message: '' }));
            this.store.dispatch(setLoading({ status: false }));
            this.authService.setUserInLocal(user);
            return loginSuccess({ user, redirect: true });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoading({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMsg({ message: errorMessage }));
          })
        );
      })
    );
  });

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signup(action.email, action.password).pipe(
          map((data) => {
            const user = this.authService.formatUser(data);
            this.store.dispatch(setErrorMsg({ message: '' }));
            this.store.dispatch(setLoading({ status: false }));
            this.authService.setUserInLocal(user);
            return signupSuccess({ user, redirect: true });
          }),
          catchError((errResp) => {
            this.store.dispatch(setLoading({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMsg({ message: errorMessage }));
          })
        );
      })
    );
  });

  autoLogin$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(autoLogin),
        map((action) => {
          const user = this.authService.getUserFromLocal();
          if(user) {
            this.store.dispatch(loginSuccess({user, redirect: false}));
          }
          
        })
      );
    },
    { dispatch: false }
  );

  autoLogout$ = createEffect(() => {
    return this.actions$.pipe(ofType(autoLogout),
    map((action) => {
      this.authService.logout();
      this.router.navigate(['/']);
    }))
  }, { dispatch: false })

  loginRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccess, signupSuccess),
        tap((action) => {
          // unlike map, tap doesn't return anything
          if(action.redirect) {
            this.router.navigate(['counter']);
          }
          
        })
      );
    },
    { dispatch: false }
  );
}
