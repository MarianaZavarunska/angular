import {Component, Input, OnInit} from '@angular/core';

import {IPost} from "../../models/IPost";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

 @Input()
 post: IPost ;

  constructor() { }

   changeName() : IPost {
      const title = this.post?.title[0].toUpperCase() + this.post?.title.slice(1);
      return  {...this.post, title: title};
   }
  ngOnInit(): void {
      // this.post =  this.changeName();
  }


}
