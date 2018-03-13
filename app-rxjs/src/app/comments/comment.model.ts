export class BlogComment {
    time: Date;
    content: string;
    author: string;

    constructor(content: string, author: string) {
        this.content = content;
        this.author = author;
        this.time = new Date();
    }
}