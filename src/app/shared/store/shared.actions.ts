import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';
export const SET_LOADING = '[shared state] set loading';

export const setLoading = createAction(SET_LOADING, props<{status: boolean}>());