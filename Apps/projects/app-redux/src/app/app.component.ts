import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newPost: string;
  constructor(private postService: PostService){
    this.newPost="";
  }
  addPost(){
    this.postService.addPost(this.newPost);
  }
}

