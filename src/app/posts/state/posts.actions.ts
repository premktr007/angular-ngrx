import { createAction, props } from "@ngrx/store";
import { Post } from "./posts.state";

export const addPostAction = createAction('[post page] add post', props<{post: Post}>());