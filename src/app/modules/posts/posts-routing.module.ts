import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./components/posts/posts.component";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {PostsGuard} from "./services/guards";
import {PostsResolver} from "./services/resolvers";

const routes: Routes = [
  {path: '',
      component: PostsComponent,
      canDeactivate:[PostsGuard],
      resolve:{posts: PostsResolver},
      children: [
      {path: ':id', component: PostDetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
