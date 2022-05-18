import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IPost } from 'src/app/models/post.interface';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      const state = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost;

      if(state){
        this.post = state;
      } else {
        this.postService.getPost(id).subscribe(post => this.post = post);
      }

    })
  }

}
