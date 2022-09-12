export interface Post {
    id?: number,
    title: string,
    description: string
}

export interface PostsState {
    posts: Post[];
}

export const intialState: PostsState  = {
    posts: []
}