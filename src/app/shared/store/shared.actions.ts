import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const SET_LOADING = '[shared state] set loading state';
export const SET_ERROR_MSG = '[shared state] set error message';

export const setLoading = createAction(SET_LOADING, props<{status: boolean}>());
export const setErrorMsg = createAction(SET_ERROR_MSG, props<{message: string}>());