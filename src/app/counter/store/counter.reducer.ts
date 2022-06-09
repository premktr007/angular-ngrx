import { createReducer, on } from "@ngrx/store"
import { addNumber, changeName, decrement, increment, reset } from "./counter.actions"
import { intialState } from "./counter.state"

const _counterReducer = createReducer(intialState, 
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter+1
        }
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter-1
        }
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        }
    }),
    on(addNumber, (state, action) => {
        return {
            ...state,
            counter: state.counter + action.number
        }
    }),
    on(changeName, (state) => {
        return {
            ...state,
            name: 'Prem Kumar'
        }
    })
)
export function counterReducer(state, action) {
    return _counterReducer(state,action) 
}