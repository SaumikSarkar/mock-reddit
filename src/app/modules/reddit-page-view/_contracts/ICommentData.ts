export interface ICommentData {
    author: string;
    comment: string;
    replies: Array<ICommentData>;
    isVisible: boolean;
}