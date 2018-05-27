import { Blog, BlogEdit } from './blog.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
import { HttpClient, HttpParams } from '@angular/common/http';


// Blog Services 
@Injectable()
export class BlogService {
    private blogListSubject: BehaviorSubject<Blog[]> = new BehaviorSubject(null);
    creationComplete: Subject<boolean> = new Subject();

    constructor(private router: Router, private http: HttpClient) {

    }

    updateBlogListSubject(): void {
        this.http.get<Blog[]>("/getAllBlogs")
            .subscribe((data) => {
                this.blogListSubject.next(data);
            });
    }
    getBlogListSubject(): BehaviorSubject<Blog[]> {
        this.updateBlogListSubject();
        return this.blogListSubject;
    }
    updateBlog(data: BlogEdit) {
        const options = { params: new HttpParams().set('id', data.id) };
        let updateObservable = Observable.create((observer: any) => {
            this.http.put("/updateBlog", data, options).subscribe((result) => {
                observer.next(result);
                observer.complete();
                this.updateBlogListSubject(); // update the blog list post any updates to individual blogs
            });
        });
        return updateObservable;
    }
    updateBlogVote(data: { id: string, thumbsUp: number, thumbsDown: number }) {
        const options = { params: new HttpParams().set('id', data.id) };
        let updateObservable = Observable.create((observer: any) => {
            this.http.put("/updateBlogVotes", data, options).subscribe((result) => {
                observer.next(result);
                observer.complete();
                this.updateBlogListSubject(); // update the blog list post any updates to individual blogs
            });
        });
        return updateObservable;

    }
    addNewBlog(title: string, author: string, content: string) {
        const newBlog = new Blog(title, content, author);
        this.http.post("/addBlog", newBlog, {}).subscribe((satus)=>{
            this.updateBlogListSubject(); // update the blog list post any updates to individual blogs
        });
    }
    notifyCreationComplete() {
        this.creationComplete.next(true);
    }
    getBlogWithId(id: string) {
        let blogObservable: Observable<Blog>
        const options = {
            params: new HttpParams().set("id", id)
        }
        blogObservable = Observable.create((observer: Observer<Blog>) => {
            this.http.get("/getBlog", options).subscribe((data: Blog) => {
                observer.next(data);
                observer.complete();
            });
        });
        return blogObservable;
    }
    navigateTo(path: any) {
        this.router.navigate(path);
    }
}
// resolver guard service - for specific blog detail
@Injectable()
export class BlogDetailResolver implements Resolve<Blog>{
    constructor(private blogService: BlogService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog> {
        let id = route.paramMap.get("id");
        return this.blogService.getBlogWithId(id);
    }
}
// Blog Services - end


//Comment Services
@Injectable()
export class BlogCommentsService {
    constructor(private http: HttpClient) {
    }
    getBlogComments(blogId): Observable<BlogComment[]> {
        let commentsObservable: Observable<BlogComment[]> = Observable.create((observer: Observer<BlogComment[]>) =>{
            this.http.get("/getBlogComments", {params: new HttpParams().set("blogId", blogId)}).subscribe((data: BlogComment[])=>{
                observer.next(data);
                observer.complete();
            })
        });
        return commentsObservable;
    }
    addComment(blogId: string, author: string, content: string): Observable<any> {
        const newComment = new BlogComment(blogId, content, author);
        let addCommentObservable : Observable<any> = Observable.create((observer: Observer<any>)=> {
            this.http.post("/addComment", newComment ).subscribe((result)=>{
                observer.next(result);
                observer.complete();
            });
        });
        return addCommentObservable;
    }
}

