import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { IAlbum } from 'src/app/models/album.interface';

@Injectable({
    providedIn: 'root'
})
export class AlbumsService {
    private url = 'https://jsonplaceholder.typicode.com/albums';

    constructor(private http: HttpClient) { }

    getAlbums(): Observable<IAlbum[]> {
        return  this.http.get<IAlbum[]>(this.url)
    }

    getAlbum(albumId: string): Observable<IAlbum>{
        return  this.http.get<IAlbum>(`${this.url}/${albumId}`);
    }
}
