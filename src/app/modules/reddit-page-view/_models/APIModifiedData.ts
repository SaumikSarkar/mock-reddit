import * as contracts from '../_contracts';
import * as models from '../_models';

export class APIModifiedData implements contracts.IAPIModifiedData {

    titleData: contracts.ITitleData;
    commentData: contracts.ICommentData[];

    constructor(data?: contracts.IAPIModifiedData) {
        this.titleData = data ? data.titleData : new models.TitleData();
        this.commentData = data ? data.commentData : new Array<models.CommentData>();
    }

}