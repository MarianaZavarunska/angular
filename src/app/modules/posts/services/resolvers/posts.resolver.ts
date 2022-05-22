import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IPost} from "../../../../models/post.interface";
import { PostService } from '../post.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolver implements Resolve<IPost[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]>| Promise<IPost[]> | IPost[] {
    return  this.postService.getPosts();
  }
}
