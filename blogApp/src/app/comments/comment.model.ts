export class BlogComment {
    blogId: any;
    time: Date;
    content: string;
    author: string;

    constructor(blogId:any, content: string, author: string) {
        this.blogId = blogId;
        this.content = content;
        this.author = author;
        this.time = new Date();
    }
}
