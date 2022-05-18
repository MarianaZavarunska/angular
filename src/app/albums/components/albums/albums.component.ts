import { Component, OnInit } from '@angular/core';
import { IAlbum } from 'src/app/models/album.interface';

import { AlbumsService } from '../../service/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
 albums: IAlbum[];

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => this.albums = albums);
  }

}
