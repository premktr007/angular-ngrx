import { counterReducer } from "./counter/store/counter.reducer";
import { CounterState } from "./counter/store/counter.state";
import { PostsState } from "./posts/store/posts.state";
import { SharedReducer } from "./shared/store/shared.reducer";
import { SharedState } from "./shared/store/shared.state";

export interface AppState {
    counter: CounterState,
    shared: SharedState
}

export const appReducer = {
    counter: counterReducer,
    shared: SharedReducer
}