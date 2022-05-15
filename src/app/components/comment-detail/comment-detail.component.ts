import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {IComment} from "../../models/IComment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  comment: IComment;

  constructor(private  activatedRoute: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {

      if(history.state.data) this.comment = history.state.data;

       else this.commentService.getComment(value['id']).subscribe(comment => this.comment = comment);
    })
  }

}
