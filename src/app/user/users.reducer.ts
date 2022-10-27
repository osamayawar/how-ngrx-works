import { createReducer, on } from '@ngrx/store';

import { addUser, getUsers } from './users.actions';
import { User } from './user.model';

export const initialState: ReadonlyArray<User> = [];

export const usersReducer = createReducer(
  initialState,
  on(getUsers, (state, { users }) => users),
  on(addUser, (state, { users }) => {
    return [...state, users ]
  })
);

