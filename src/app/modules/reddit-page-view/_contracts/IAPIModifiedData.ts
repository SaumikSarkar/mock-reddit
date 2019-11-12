import * as contracts from '../_contracts';

export interface IAPIModifiedData {
    titleData: contracts.ITitleData;
    commentData: Array<contracts.ICommentData>;
}