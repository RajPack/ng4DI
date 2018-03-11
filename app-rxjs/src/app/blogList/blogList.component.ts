import { Component , OnInit, OnDestroy} from '@angular/core';
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
  constructor(private blogService: BlogService) {}
  
  ngOnInit() {
    this.listObservable = this.blogService.getBlogListSubject();
    this.listSubscription = this.listObservable.subscribe()
  }
  ngOnDestroy(){
    this.listSubscription.unsubscribe();
  }
}
