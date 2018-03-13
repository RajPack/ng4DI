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
}

export class BlogEdit {
    id: any;
    title: string;
    content: string;
    author: string;
}
