import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../blog/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blogList.component.html',
  styleUrls: ['./blogList.component.css']
})
export class BlogListComponent implements OnInit, OnDestroy {
  listSubscription: Subscription;
  listObservable: Observable<Blog[]>;
  toolTip: string = "";


  constructor(private blogService: BlogService) { }
  ngOnInit() {
    this.listObservable = this.blogService.getBlogListSubject();
    this.listSubscription = this.listObservable.subscribe();
  }
  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
  private editBlog(event, blog) {
    event.preventDefault();
    event.stopImmediatePropagation();
    // blog.editMode = true;
    this.toggleEditMode(blog);
  }
  private toggleEditMode(blog) {
    blog.editMode = !blog.editMode;
  }
  private vote(direction: number, blog: Blog) {
    (!blog.voted) && (blog[direction] += 1);
    this.toolTip = "You have casted your vote for this blog already. Can vote only once!";
    blog.voted = true;
  }
}

