import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import {CommentsResolver} from "./services/resolvers";

const routes: Routes = [
  {path:'',
      component: CommentsComponent,
      resolve:{comments: CommentsResolver},
      children: [
      {path:':id', component: CommentDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
