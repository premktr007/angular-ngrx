import { User } from "../user.model"

export interface AuthState {
    user: User | null;
}

export const intialState: AuthState = { 
    user: null
}