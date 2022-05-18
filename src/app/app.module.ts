import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import {
  UsersComponent,
  PostsComponent,
  PostComponent,
  CommentsComponent,
  CommentComponent,
  UserComponent,
  HomeComponent,
  PostDetailComponent,
  CommentDetailComponent,
  NotFoundComponent
} from './components';

import {CheckService} from "./services";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:"full"},
  { path: 'home', component: HomeComponent ,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserComponent, canActivate:[CheckService]},
      {path: 'posts', component: PostsComponent},
      {path: 'posts/:id', component: PostDetailComponent, canActivate:[CheckService]},
      {path: 'comments', component: CommentsComponent},
      {path: 'comments/:id', component: CommentDetailComponent, canActivate:[CheckService]},
      ]
  },
  {path: '**', component: NotFoundComponent},
]  // TODO: routes as child route and render the component


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    UserComponent,
    HomeComponent,
    PostDetailComponent,
    CommentDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
