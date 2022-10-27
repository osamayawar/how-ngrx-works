import { createAction, props } from '@ngrx/store';
import { User } from './user.model';

export const addUser = createAction(
  '[User List] Add User',
  props<{users: User}>()
);

export const getUsers = createAction(
  '[User List] Retrieve Users',
  props<{ users: ReadonlyArray<User> }>()
);
