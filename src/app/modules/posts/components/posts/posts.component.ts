import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {IPost} from "../../../../models/post.interface";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: IPost[];

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({posts}) => this.posts = posts);
  }

}
