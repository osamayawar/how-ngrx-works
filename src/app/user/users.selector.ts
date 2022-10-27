import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from './user.model';

export const selectUsers = createFeatureSelector<ReadonlyArray<User>>('users');

export const selectUsersCollection = createSelector(
  selectUsers,
  (users) => {
    return users;
  }
);
