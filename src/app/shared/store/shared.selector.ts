import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SharedState } from './shared.state';

export const getSharedState = createFeatureSelector<SharedState>('shared');

export const getLoadingState = createSelector(getSharedState, (state) => state.isLoading);