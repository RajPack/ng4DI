import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogComment } from './comment.model';
import { BlogService } from '../blog/blog.service';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    commentsObservable: Observable<BlogComment[]>;
    constructor(private blogService: BlogService){
        
    }
    ngOnInit(){

    }
}