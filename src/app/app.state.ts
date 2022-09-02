import { isAuthenticated } from './auth/store/auth.selector';
import { AuthReducer } from "./auth/store/auth.reducer";
import { AuthState } from "./auth/store/auth.state";
import { counterReducer } from "./counter/store/counter.reducer";
import { CounterState } from "./counter/store/counter.state";
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