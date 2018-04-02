import * as Redux from 'Redux';
import { Post } from './post.model';


export class AppState {
    private store: Redux.Store<Post[]>;
    constructor(){
        let initialState: Post[] = [];
        this.store = Redux.createStore(this.AppReducer, initialState);
        // console.log(this.store.getState())
    }
    subscribe(observer){
        this.store.subscribe(observer);
    }
    getCurrentState() {
        return this.store.getState();
    }
    dispatchAction(action): void {
        this.store.dispatch(action);
    }
    AppReducer(state, action) {
        console.log(state);
        switch(action.type){
            case "addPost" : 
                let newState = state.map((post: Post)=>{
                    return post;
                });
                newState.push(action.post);
                return newState
            default: 
            return state;
        }
    }


}