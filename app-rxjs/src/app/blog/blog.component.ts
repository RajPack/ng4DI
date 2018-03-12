import { Component, Input } from '@angular/core'
import { Blog } from './blog.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-blog',
    inputs: ['blog'],
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent {
    @Input('blog') blog: Blog;
    votedByCurrentUser: boolean = false;
    toolTip: string  = "";
    constructor(){
    }

    private vote(direction: number){
        (!this.votedByCurrentUser) && (this.blog[direction] += 1);
        this.toolTip = "You have casted your vote for this blog already. Can vote only once!";
        this.votedByCurrentUser = true;
    }
}