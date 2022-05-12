import {Component, Input, OnInit} from '@angular/core';

import { IComment } from 'src/app/models/IComment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor() {
  }

  changeName(): IComment {
    const name = this.comment.name[0].toUpperCase() + this.comment.name.slice(1);

    return {...this.comment, name: name};
  }

  ngOnInit(): void {
    this.comment = this.changeName();
  }
}
