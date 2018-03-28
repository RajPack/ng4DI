
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Blog } from "../blog/blog.model";
import { BlogService } from "../blog/blog.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-blog-edit',
    templateUrl: './blogEdit.component.html',
    styleUrls:  ['./blogEdit.component.css']
})
export class BlogEditComponent implements OnInit {
    blog: Blog;
    blogForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private blogService: BlogService, private route: ActivatedRoute) {
        this.createForm();
    }
    ngOnInit() {
        this.route.data.subscribe((data)=> {
            this.blog = data.blog;
            this.setInitialValue();
        });
    }
    createForm() {
        this.blogForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    setInitialValue() {
        this.blogForm.setValue({
            title : this.blog.title,
            content: this.blog.content,
            author: this.blog.author
        });
    }

    onSubmit() {
        let author: string, title: string, content: string;
        author = this.blogForm.get('author').value;
        title = this.blogForm.get('title').value;
        content = this.blogForm.get('content').value;
        this.blogService.updateBlog({id: this.blog.id, title: title, author: author, content: content});
        this.blogService.navigateTo(["/blogList/blog", this.blog.id ]);
    }
    toggleEditMode() {
        this.blogService.navigateTo(["/blogList/blog", this.blog.id ]);
    }
}
