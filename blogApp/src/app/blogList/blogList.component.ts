import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from '../blog/blog.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Blog } from '../blog/blog.model';
import {  ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blogList.component.html',
  styleUrls: ['./blogList.component.css']
})
export class BlogListComponent implements OnInit {
  listObservable: Observable<Blog[]>;
  sideView = false;

  constructor(private blogService: BlogService, private router: Router) { }
  ngOnInit() {
    this.listObservable = this.blogService.getBlogListSubject();
    this.sideView = this.router.url.match("/blogList/blog/") ? true: false;
    this.sideView = this.router.url.match("/blogList/editBlog/") ? true: this.sideView;
    this.router.events.subscribe((event)=> {
      if(event instanceof NavigationEnd){
        let url = event.url;
        this.sideView = url.match("/blogList/blog/") ? true: false;
        this.sideView = url.match("/blogList/editBlog/") ? true: this.sideView;
      }
    });

  }
  private editBlog(event, blog) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.toggleEditMode(blog);
  }
  private toggleEditMode(blog) {
    blog.editMode = !blog.editMode;
  }

}

