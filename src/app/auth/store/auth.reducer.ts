import { createReducer } from "@ngrx/store"
import { intialState } from "./auth.state"

const _authReducer = createReducer(intialState);

export function AuthReducer(state, action) {
    return _authReducer(state, action)
}