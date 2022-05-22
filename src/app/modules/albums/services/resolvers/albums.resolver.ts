import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IAlbum} from "../../../../models/album.interface";
import {AlbumsService} from "../albums.service";

@Injectable({
  providedIn: 'root'
})
export class AlbumsResolver implements Resolve<IAlbum[]> {

  constructor(private albumsService: AlbumsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAlbum[]> | Promise<IAlbum[]> | IAlbum[]{
    return this.albumsService.getAlbums();
  }
}
