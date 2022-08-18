import { createReducer, on } from "@ngrx/store";
import { setLoading } from "./shared.actions";
import { intialState } from "./shared.state";

const _sharedReducer = createReducer(intialState,
    on(setLoading, (state, action) => {
        return {
            ...state,
            isLoading: action.status 
        }
    }));

export function SharedReducer(state, action) {
    return _sharedReducer(state, action);
}