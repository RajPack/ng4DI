
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Blog } from "../blog/blog.model";
import { BlogService } from "../blog/blog.service";

@Component({
    selector: 'app-blog-add',
    templateUrl: './blogAdd.component.html',
    styleUrls:  ['./blogAdd.component.css']
})
export class BlogAddComponent implements OnInit {
    blogAddForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private blogService: BlogService) {
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.blogAddForm = this.formBuilder.group({
            title: ['', Validators.required],
            content: ['', Validators.required],
            author: ['', Validators.required]
        });
    }

    onSubmit() {
        let author: string, title: string, content: string;
        author = this.blogAddForm.get('author').value;
        title = this.blogAddForm.get('title').value;
        content = this.blogAddForm.get('content').value;
        this.blogService.addNewBlog(title,author, content);
        this.blogService.navigateTo(["/blogList"]);
    }
    destroyComponent() {
        this.blogService.navigateTo(["/blogList"]);
    }
}
