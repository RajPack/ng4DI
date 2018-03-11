import { Component, Input } from '@angular/core'
import { Blog } from './blog.model';

@Component({
    selector: 'app-blog',
    inputs: ['blog'],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    @Input('blog') blog: Blog
    constructor(){

    }
}