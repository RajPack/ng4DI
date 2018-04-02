import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostObservable().subscribe((posts: Post[])=> {
      this.posts = posts;
    });
  }

}
