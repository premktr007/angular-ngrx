import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const addPostAction = createAction('[post page] add post', props<{post: Post}>());
export const updatePostAction = createAction('[post page] update post', props<{post: Post}>());
export const deletePostAction = createAction('[postpage] delet post', props<{id: number}>());
export const loadPosts = createAction('[post page] load posts');
export const loadPostsSuccess = createAction('[post page] posts loaded', props<{posts: Post[]}>());