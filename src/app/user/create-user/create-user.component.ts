import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../user.model'
import { Store } from '@ngrx/store';
import { addUser, getUsers } from '../users.actions';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})

export class CreateUserComponent {
  @Output() onUserSaved: EventEmitter<boolean> = new EventEmitter();

  users: ReadonlyArray<User> = [];

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    emailAddress: new FormControl('', Validators.required),
  });
  constructor(private dialog: MatDialog, private store: Store) {
  }

  onSubmit() {
    if(this.userForm.valid) {
      this.createUser(this.userForm.value);
    }
  }

  private createUser(userData: User): void {
    this.store.dispatch(addUser({users: userData}));
    this.dialog.closeAll();
  }




}
