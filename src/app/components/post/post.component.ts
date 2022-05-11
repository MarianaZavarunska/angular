import {Component, Input, OnInit} from '@angular/core';

import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post: IPost = {
  userId: 1,
  id: 1,
  title: '',
  body: '',
}
  constructor() { }

  ngOnInit(): void {
  }

}
