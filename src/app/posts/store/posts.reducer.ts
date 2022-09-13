import { createReducer, on } from '@ngrx/store';
import { addPostSuccess, deletePostAction, loadPostsSuccess, updatePostAction } from './posts.actions';
import { intialState } from './posts.state';

const _postsReducer = createReducer(intialState,
  on(addPostSuccess, (state, action) => {
    return {
      ...state,
      posts: [...state.posts, action.post],
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
  }),
  on(loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.posts
    }
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
