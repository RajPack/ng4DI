import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Blog } from '../blog/blog.model';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogId: number | string;
  blog: Blog;
  constructor(private route: ActivatedRoute, private blogService: BlogService) {

   }

  ngOnInit() {
    this.route.data.subscribe((routeData)=> {
     this.blog  = routeData.blog;
     this.blogId = this.blog.id;
    });
  }
  vote(direction: string, blog: Blog) {
    (!blog.voted) && (blog[direction] += 1);
    this.blogService.updateBlogVote({id: blog.id, thumbsDown: blog.thumbsDown, thumbsUp: blog.thumbsUp}).subscribe((data)=> {
      blog.voteToolTip = "You have casted your vote for this blog already. Can vote only once!";
      blog.voted = true;
    });
  }
}
