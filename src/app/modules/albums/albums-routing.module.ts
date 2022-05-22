import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlbumsComponent } from './components/albums/albums.component';
import {AlbumsResolver} from "./services/resolvers";

const routes: Routes = [
  {path: '', component: AlbumsComponent, resolve:{albums: AlbumsResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
