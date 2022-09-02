import { createReducer, on } from "@ngrx/store"
import { autoLogout, loginSuccess, signupSuccess } from "./auth.actions";
import { intialState } from "./auth.state"

const _authReducer = createReducer(intialState,
    on(loginSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(signupSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(autoLogout, (state, action) => {
        return {
            ...state,
            user: null
        }
    })
    );

export function AuthReducer(state, action) {
    return _authReducer(state, action)
}