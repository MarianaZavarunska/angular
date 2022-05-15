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
  CommentDetailComponent
} from './components';

import {CheckService} from "./services";



const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:"full"},
  { path: 'home', component: HomeComponent ,
    children: [
      {path: 'users', component: UsersComponent},
      {path: 'users/:id', component: UserComponent, canActivate:[CheckService]},
      {path: 'posts', component: PostsComponent},
      {path: 'posts/:id', component: PostDetailComponent},
      {path: 'comments', component: CommentsComponent},
      {path: 'comments/:id', component: CommentDetailComponent},
      ]
  }
]
// {path: '**', component: PageNotFound},

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
