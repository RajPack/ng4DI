import { Blog } from './blog.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { initialBloglist } from './blog.data';

export class BlogService {
    private blogListSubject : BehaviorSubject<Blog[]> = new BehaviorSubject(initialBloglist);
    
    getBlogListSubject (){
        return this.blogListSubject;
    }
}