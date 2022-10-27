import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './material.module';

import { CreateUserComponent } from './user/create-user/create-user.component';
import { UsersListComponent } from './user/users-list/users-list.component';

import { StoreModule } from '@ngrx/store';
import { usersReducer } from './user/users.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModules,
    StoreModule.forRoot({ users: usersReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
