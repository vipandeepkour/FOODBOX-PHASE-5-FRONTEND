import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import {httpClientModule} from '@angular/common/http';
import {ReactiveFormModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserListComponent,
    UserdetailsComponent,
    AdduserComponent,
    UserlistComponent,
    EdituserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    httpClientModule,
    ReactiveFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
