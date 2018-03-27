import { Blog, BlogEdit } from './blog.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { initialBloglist } from './blog.data';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/filter';
import { Subject } from 'rxjs/Subject';
import { BlogComment } from '../comments/comment.model';
import { Subscription } from 'rxjs/Subscription';
import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class BlogService {
    private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject(initialBloglist);
    creationComplete: Subject<boolean> = new Subject();

    constructor(private router: Router) {

    }
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
        const newBlog = new Blog(title, content, author);
        let currentList: Blog[];
        this.blogListSubject.subscribe((list) => {currentList = list; });
        currentList.push(newBlog);
        this.blogListSubject.next(currentList);
        // this.notifyCreationComplete();
    }
    notifyCreationComplete() {
        this.creationComplete.next(true);
    }
    getBlogWithId(id: string | number ){
        let result: Blog, blogObservable;
        let subscription = this.blogListSubject.subscribe((list)=> {
           let filteredList =  list.filter ((blog)=> {
                return blog.id === +id
            }); 
            result = filteredList.length === 1 ? filteredList[0] : undefined;
        });
        subscription.unsubscribe();
        blogObservable = Observable.create((observer: Observer<Blog>)=> {
            observer.next(result);
            observer.complete();
        });
        return blogObservable;
    }

    navigateTo (path: any) {
        this.router.navigate(path);
    }
}

@Injectable()
export class BlogDetailResolver implements Resolve<Blog>{
    constructor(private blogService: BlogService) {

    }

    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog> {
        let id = route.paramMap.get("id");
        return this.blogService.getBlogWithId(id);
    }
}

export class BlogCommentsService {
    private initialCommentsObj: BlogComment[] = [];
    private allCommentsSubject: BehaviorSubject<BlogComment[]>  = new BehaviorSubject(this.initialCommentsObj);

    constructor() {

    }
    fetchBlogCommentsSubject (blogId: any) {
        let localSubscription: Subscription ;
        const blogCommentsSubject: BehaviorSubject<BlogComment[]> = new BehaviorSubject([]);
        localSubscription = this.allCommentsSubject.subscribe((commentsArr)=> { 
            const blogComments: BlogComment[] = commentsArr.filter((blogComment, index)=> {
                return blogComment.blogId === blogId;
            });
            blogCommentsSubject.next(blogComments);
        });
        return blogCommentsSubject;
    }
    addComment(blogId: string, author: string, content: string) {
        const newComment = new BlogComment(blogId, content, author);
        let allComments: BlogComment[];
        const localSubscription = this.allCommentsSubject.subscribe((commentsArr)=> {
            allComments = commentsArr;
        });
        allComments.push(newComment);
        this.allCommentsSubject.next(allComments);
        localSubscription.unsubscribe();
    }
}
