import { AppState } from "./app.state";
import { BehaviorSubject } from "rxjs/BehaviorSubject"
import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable()
export class PostService {
    postObservable: BehaviorSubject<Post[]> = new BehaviorSubject(null);
    constructor(private appState: AppState) {
        this.appState.subscribe(() => {
            let state = this.appState.getCurrentState();
            this.postObservable.next(state);
            console.log(this.postObservable);
        });
    }
    getPostObservable() {
        return this.postObservable;
    }
    addPost(message:string) {
        let post = {message: message, comments: []};
        this.appState.dispatchAction({type: "addPost", post: post});
    }
}