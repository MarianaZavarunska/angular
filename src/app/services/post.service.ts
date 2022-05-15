import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { IPost } from '../models/IPost';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }


 getPosts(): Observable<IPost[]> {
    return  this.http.get<IPost[]>(this.url)
 }

 getPost(userId: string): Observable<IPost>{
      console.log('run get post');
    let result = this.http.get<IPost>(`${this.url}/${userId}`);
    console.log(result)
    return result;
 }
}
