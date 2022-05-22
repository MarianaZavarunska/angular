import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/models/comment.interface';

import { CommentService } from '../../services/comment.service';
import {IPost} from "../../../../models/post.interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment;

  constructor(private activatedRoute: ActivatedRoute, private  router: Router, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IComment;

      if(state){
        this.comment = state;
      } else {
        this.commentService.getComment(id).subscribe(comment => this.comment = comment);
      }
    })
  }

}
