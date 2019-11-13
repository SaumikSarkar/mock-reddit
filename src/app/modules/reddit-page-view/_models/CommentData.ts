import * as contracts from '../_contracts';

export class CommentData implements contracts.ICommentData {

    author: string;
    comment: string;
    replies: contracts.ICommentData[];
    isVisible: boolean;

    constructor(data?: contracts.ICommentData) {
        this.comment = data ? data.comment : null;
        this.author = data ? data.author : null;
        this.replies = data ? data.replies : new Array<contracts.ICommentData>();
        this.isVisible = data ? data.isVisible : true;
    }

}