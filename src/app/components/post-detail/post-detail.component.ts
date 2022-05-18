import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPost } from 'src/app/models/IPost';
import {PostService, UserService } from 'src/app/services';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
post: IPost;
user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {

      if(history.state.data) {
        this.post = history.state.data;
      } else {
        this.postService.getPost(value['id']).subscribe(post => {console.log('subscribe', post); this.post = post} );
      }
  this.post && this.userService.getUser(this.post.userId).subscribe(user => this.user = user); // TODO: fix call service
      console.log(this.user);
      console.log(this.post)

    });
  }
}
