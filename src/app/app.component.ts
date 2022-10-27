import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './user/create-user/create-user.component'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User> = new Observable();
  constructor(private dialog: MatDialog, private store: Store<User>) {
    // this.store.select()
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateUserComponent);
  }
}
