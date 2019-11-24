import * as contracts from '../_contracts';

export class HomePageDetailData implements contracts.IHomePageDetailData {

    discussionTitle: string;
    author: string;
    showImg: boolean;
    imgUrl: string;
    imgHeight: string;
    imgWidth: string;
    redirectUrl: string;

    constructor(data?: contracts.IHomePageDetailData) {
        this.discussionTitle = data ? data.discussionTitle : null;
        this.author = data ? data.author : null;
        this.showImg = data ? data.showImg : false;
        this.imgUrl = data ? data.imgUrl : null;
        this.imgHeight = data ? data.imgHeight : null;
        this.imgWidth = data ? data.imgWidth : null;
        this.redirectUrl = data ? data.redirectUrl : null;
    }

}