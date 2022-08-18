import { createReducer, on } from '@ngrx/store';
import { addPostAction, deletePostAction, updatePostAction } from './posts.actions';
import { intialState } from './posts.state';

const _postsReducer = createReducer(intialState,
  on(addPostAction, (state, action) => {
    let post = { ...action.post };
    post.id = state.posts.length + 1;
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),

  on(updatePostAction, (state, action) => {
    const updatedPosts = state.posts.map((post) => {
      return post.id === action.post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  }),

  on(deletePostAction, (state, action) => {
    const filteredPosts = state.posts.filter((post) => post.id !== action.id);
    return {
        ...state,
        posts: filteredPosts
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
