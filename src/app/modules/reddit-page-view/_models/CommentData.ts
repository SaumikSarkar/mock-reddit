import * as contracts from '../_contracts';

export class CommentData implements contracts.ICommentData {

    author: string;
    comment: string;
    replies: contracts.ICommentData[];

    constructor(data?: contracts.ICommentData) {
        this.comment = data ? data.comment : null;
        this.author = data ? data.author : null;
        this.replies = data ? data.replies : new Array<contracts.ICommentData>();
    }

}