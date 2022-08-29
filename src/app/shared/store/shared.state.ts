export interface SharedState {
    isLoading: boolean;
    errorMsg: string;
}

export const intialState: SharedState = {
    isLoading: false,
    errorMsg: ''
}