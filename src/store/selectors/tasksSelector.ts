import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const state = ({ tasks }: RootState) => tasks;

export const tasksSelector = createSelector(state, ({tasks} ) => tasks);
export const filtersSelector = createSelector(state, ({filters} ) => filters);
