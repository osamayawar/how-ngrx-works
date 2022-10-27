import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsersCollection } from '../users.selector';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'emailAddress'];
  users$ = this.store.select(selectUsersCollection);

  constructor(private store: Store) {
  }

}
