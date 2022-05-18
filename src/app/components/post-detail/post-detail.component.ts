import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { IPost } from 'src/app/models/IPost';
import {PostService, UserService } from 'src/app/services';
import {IUser} from "../../models/IUser";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  user: IUser;
  post: IPost;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(this.router.getCurrentNavigation()?.extras)
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;
      console.log(state)

      if(state) {
        this.post = state;
      } else {
        this.postService.getPost(id).subscribe(post => {console.log('subscribe', post); this.post = post} );
      }
     this.post && this.userService.getUser(this.post.userId).subscribe(user => this.user = user);

    });
  }
}
