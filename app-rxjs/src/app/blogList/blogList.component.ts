import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../blog/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blogList.component.html',
  styleUrls: ['./blogList.component.css']
})
export class BlogListComponent implements OnInit {
  listObservable: Observable<Blog[]>;

  constructor(private blogService: BlogService) { }
  ngOnInit() {
    this.listObservable = this.blogService.getBlogListSubject();
  }
  private editBlog(event, blog) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.toggleEditMode(blog);
  }
  private toggleEditMode(blog) {
    blog.editMode = !blog.editMode;
  }
  private vote(direction: string, blog: Blog) {
    (!blog.voted) && (blog[direction] += 1);
    blog.voteToolTip = "You have casted your vote for this blog already. Can vote only once!";
    blog.voted = true;
  }
}

