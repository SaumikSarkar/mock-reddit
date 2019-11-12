import * as contracts from '../_contracts';

export class TitleData implements contracts.ITitleData {

    title: string;
    author: string;
    time: string;
    upvotes: number;
    upvoteRatio: number;
    commentCount: number;


    constructor(data?: contracts.ITitleData) {
        this.title = data ? data.title : null;
        this.author = data ? data.author : null;
        this.time = data ? data.time : null;
        this.upvotes = data ? data.upvotes : null;
        this.upvoteRatio = data ? data.upvoteRatio : null;
        this.commentCount = data ? data.commentCount : null;
    }

}