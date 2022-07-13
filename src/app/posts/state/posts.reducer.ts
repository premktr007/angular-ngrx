import { createReducer, on } from '@ngrx/store';
import { intialState } from './posts.state';

const _postsReducer = createReducer(intialState);

export function postsReducer(state, action) {
    return _postsReducer(state, action)
}
