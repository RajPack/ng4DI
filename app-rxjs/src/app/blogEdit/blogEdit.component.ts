
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Blog } from "../blog/blog.model";

@Component({
    selector: 'app-blog-edit',
    templateUrl: './blogEdit.component.html',
    styleUrls:  ['./blogEdit.component.css']
})
export class BlogEditComponent implements OnInit {
    @Input() blog: Blog;
    blogForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.createForm();
    }
    ngOnInit() {
        this.setInitialValue();
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
}
