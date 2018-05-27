import { Component, OnInit } from '@angular/core';
import { Post } from '../services/post.model';
import { PostService } from '../services/post.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  postObservable: Observable<Post[]>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postObservable =  this.postService.getPostObservable();
  }

}
