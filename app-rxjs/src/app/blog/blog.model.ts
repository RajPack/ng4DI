export class Blog {
    id: any;
    title: string;
    content: string;
    author: string;
    thumbsUp: number;
    thumbsDown: number;
    editMode?: boolean;
    voted?: boolean;
    voteToolTip?: string;

    constructor(title: string, content: string, author: string){
        this.title = title;
        this.content = content || "";
        this.author = author;
        this.id = new Date().getTime();
        this.thumbsDown = 0;
        this.thumbsUp = 0;
    }
    
}

export class BlogEdit {
    id: any;
    title: string;
    content: string;
    author: string;
}
