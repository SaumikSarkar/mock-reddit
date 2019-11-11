import * as models from '../_contracts';

export class TitleData implements models.ITitleData {

    title: string;
    author: string;
    time: string;
    upvotes: number;
    upvoteRatio: number;

    constructor(data?: models.ITitleData) {
        this.title = data ? data.title : null;
        this.author = data ? data.author : null;
        this.time = data ? data.time : null;
        this.upvotes = data ? data.upvotes : null;
        this.upvoteRatio = data ? data.upvoteRatio : null;
    }

}