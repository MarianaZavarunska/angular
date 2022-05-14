import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import {
  UsersComponent,
  UserComponent,
  PostsComponent,
  PostComponent,
  CommentsComponent,
  CommentComponent,
  UserDetailComponent } from './components';


const appRoutes: Routes = [
  { path: '',
    children: [
      { path: 'users', component: UsersComponent,
        children: [
          {path: ':id', component: UserDetailComponent},
        ]
      },
      {path: 'posts', component: PostsComponent},
      {path: 'comments', component: CommentsComponent}
    ]}
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    UserDetailComponent,
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
