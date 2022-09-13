export interface Post {
    id?: string | number,
    title: string,
    description: string
}

export interface PostsState {
    posts: Post[];
}

export const intialState: PostsState  = {
    posts: []
}