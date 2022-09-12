import { PostsService } from './../posts.service';
import { loadPosts, loadPostsSuccess } from './posts.actions';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { Post, PostsState } from "./posts.state";
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { setErrorMsg, setLoading } from 'src/app/shared/store/shared.actions';
import { AuthService } from 'src/app/auth/auth.service';
import { loginSuccess } from 'src/app/auth/store/auth.actions';

@Injectable()
export class PostsEffect {
  constructor(
    private actions$: Actions,
    private store: Store<PostsState>,
    private postsService: PostsService,
    private authService: AuthService
  ) {}

  fetchPosts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadPosts),
        exhaustMap((action) => {
          return this.postsService.getPosts().pipe(
            map((data) => {
              const posts: Post[] = [];
              for (let key in data) {
                posts.push(data[key]);
              }
              this.store.dispatch(setErrorMsg({ message: '' }));
              this.store.dispatch(setLoading({ status: false }));
              return loadPostsSuccess({posts});
            }),
            catchError((errResp) => {
              this.store.dispatch(setLoading({ status: false }));
              const errorMessage = this.authService.getErrorMessage(errResp.error.error.message);
              return of(setErrorMsg({ message: errorMessage }));
            })
          );
        })
      );
    },
  );
}