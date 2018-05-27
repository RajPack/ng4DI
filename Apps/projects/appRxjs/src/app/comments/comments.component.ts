import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BlogComment } from './comment.model';
import { BlogCommentsService } from '../blog/blog.service';
import { Blog } from '../blog/blog.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
    @Input() blog: Blog;
    commentsObservable: Observable<BlogComment[]>;
    comments: BlogComment[];
    newComment: FormGroup;
    constructor(private commentsService: BlogCommentsService, private formBuilder: FormBuilder) {

    }
    ngOnInit() {
        this.createForm();
        this.commentsObservable = this.commentsService.fetchBlogCommentsSubject(this.blog.id);
        this.commentsObservable.subscribe((arr) => {
            this.comments = arr;
        });
    }
    createForm() {
        this.newComment = this.formBuilder.group({
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }
    onSubmit() {
        let author: string, content: string;
        author = this.newComment.get("author").value;
        content = this.newComment.get("content").value;
        this.commentsService.addComment(this.blog.id, author, content);
        this.clearForm();
    }
    clearForm() {
        this.newComment.setValue({
            author: "",
            content: ""
        });
    }
}
