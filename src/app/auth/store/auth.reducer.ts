import { createReducer, on } from "@ngrx/store"
import { loginSuccess } from "./auth.actions";
import { intialState } from "./auth.state"

const _authReducer = createReducer(intialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }));

export function AuthReducer(state, action) {
    return _authReducer(state, action)
}