import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {adduserComponent} from './Add user/adduser.Component';
import {userlistComponent} from '/User list/userlist.component';
const routes: Routes = [
 {
  path:'Add user',component:adduserComponent
 },
 {
  path:'User list',component:userlistComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
