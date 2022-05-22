import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UsersResolver } from './services/resolvers';
import {UsersGuard} from "./services/guards";


const routes: Routes = [
  {
      path: '', component: UsersComponent,
      canDeactivate:[UsersGuard],
      resolve: {users: UsersResolver},
      children: [
      {path: ':id', component: UserDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
