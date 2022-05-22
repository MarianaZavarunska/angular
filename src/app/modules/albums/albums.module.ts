import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumComponent } from './components/album/album.component';
import {AlbumsService} from "./services";
import {AlbumsResolver} from "./services/resolvers";



@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule,
  ],
  providers:[AlbumsService, AlbumsResolver]
})
export class AlbumsModule { }
