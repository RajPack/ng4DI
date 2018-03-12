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
  votedByCurrentUser: boolean = false;
  editMode: boolean = false;
  toolTip: string = "";

  
  constructor(private blogService: BlogService) { }
  ngOnInit() {
    this.listObservable = this.blogService.getBlogListSubject();
    this.listSubscription = this.listObservable.subscribe();
  }
  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }
  private editBlog(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.editMode = true;
  }
  private vote(direction: number, blog: Blog) {
    (!this.votedByCurrentUser) && (blog[direction] += 1);
    this.toolTip = "You have casted your vote for this blog already. Can vote only once!";
    this.votedByCurrentUser = true;
  }
}

