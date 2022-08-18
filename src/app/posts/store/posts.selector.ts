import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const getPosts = createSelector(getPostsState, (state) => state.posts);
export const getPost = (id) => createSelector(getPostsState, (state) => {
    const idx = state.posts.findIndex(post => post.id == id);
    return state.posts[idx]
})