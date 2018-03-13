import { Blog, BlogEdit } from './blog.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { initialBloglist } from './blog.data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject } from 'rxjs/Subject';


export class BlogService {
    private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject(initialBloglist);
    creationComplete: Subject<boolean> = new Subject();

    getBlogListSubject(): BehaviorSubject<Blog[]> {
        return this.blogListSubject;
    }
    updateBlog(data: BlogEdit) {
        let currentList: Blog[], updatedBlog: Blog, matchIndex: number;
        this.blogListSubject.subscribe((list) => {currentList = list; });
        updatedBlog = currentList.filter((blog, index) => {
            return blog.id === data.id ? (matchIndex = index) || true : false ;
        }).map((blog) => {
            return  {
                id: blog.id,
                title: data.title,
                content: data.content,
                thumbsDown: blog.thumbsDown,
                thumbsUp: blog.thumbsUp,
                author: data.author,
                voted: blog.voted || false,
                voteToolTip: blog.voteToolTip
            };
        })[0];
        currentList[matchIndex] = updatedBlog;
        this.blogListSubject.next(currentList);
    }
    addNewBlog(title: string, author: string, content: string) {
        let newBlog = new Blog(title, content, author);
        let currentList: Blog[];
        this.blogListSubject.subscribe((list) => {currentList = list; });
        currentList.push(newBlog);
        this.blogListSubject.next(currentList);
        this.notifyCreationComplete();
    }

    notifyCreationComplete(){
        this.creationComplete.next(true);
    }
}
