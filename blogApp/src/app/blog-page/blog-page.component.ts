import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Blog } from '../blog/blog.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogId: number | string;
  blog: Blog;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.data.subscribe((routeData)=> {
     this.blog  = routeData.blog;
     this.blogId = this.blog.id;
    });
  }
  vote(direction: string, blog: Blog) {
    (!blog.voted) && (blog[direction] += 1);
    blog.voteToolTip = "You have casted your vote for this blog already. Can vote only once!";
    blog.voted = true;
  }

}
