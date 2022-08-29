import { createReducer, on } from "@ngrx/store";
import { setErrorMsg, setLoading } from "./shared.actions";
import { intialState } from "./shared.state";

const _sharedReducer = createReducer(intialState,
    on(setLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.status 
        }
    }),
    
    on(setErrorMsg, (state, action) => {
        return {
            ...state,
            errorMsg: action.message
        }
    }));

export function SharedReducer(state, action) {
    return _sharedReducer(state, action);
}