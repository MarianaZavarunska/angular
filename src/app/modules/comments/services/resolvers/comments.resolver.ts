import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {IComment} from "../../../../models/comment.interface";
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<IComment[]> {

  constructor(private commentService: CommentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment[]> | Promise<IComment[]> | IComment[]{
    return this.commentService.getComments();
  }
}
