import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'users', loadChildren: () => import('./users/users.module').then(cl=> cl.UsersModule)},
    {path: 'posts', loadChildren: () => import('./posts/posts.module').then(cl=> cl.PostsModule)},
    {path: 'comments', loadChildren: () => import('./comments/comments.module').then(cl=> cl.CommentsModule)},
    {path: 'albums', loadChildren: () => import('./albums/albums.module').then(cl=> cl.AlbumsModule)},
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})


export class AppRoutingModule{}