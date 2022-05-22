import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IComment } from 'src/app/models/comment.interface';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({comments}) => this.comments = comments);
  }

}
