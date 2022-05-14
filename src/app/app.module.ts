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
  UserDetailComponent,
  HomeComponent }
  from './components';

import {CheckService} from "./services";
import {ResolverService} from "./services/resolver.service";




const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:"full"},
  { path: 'home', component: HomeComponent ,
    children: [
      {path: 'users', component: UsersComponent, resolve: {users: ResolverService}},
      {path: 'users/:id', component: UserDetailComponent, canActivate:[CheckService]},
      {path: 'posts', component: PostsComponent},
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent}
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
    UserDetailComponent,
    HomeComponent,
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
