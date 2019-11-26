import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as models from '../_models';

@Injectable({
  providedIn: 'root'
})
export class PageViewService {

  constructor(private http: HttpClient) { }

  getPageData(apiUrl: string): Observable<models.APIModifiedData> {
    return this.http.get(`https://${apiUrl}.json`).pipe(map(response => this.mapAPIData(response)));
  }

  mapAPIData(apiData: any): models.APIModifiedData {
    let apiModifiedData: models.APIModifiedData = new models.APIModifiedData();
    if (apiData && apiData.length != 0) {
      apiModifiedData = {
        titleData: this.mapTitleData(apiData[0].data.children[0].data),
        commentData: this.mapCommentData(apiData[1].data.children)
      }
    }
    return apiModifiedData;
  }

  mapTitleData(dataArray: any): models.TitleData {
    let titleData: models.TitleData = new models.TitleData();
    titleData = {
      title: dataArray.title,
      author: dataArray.author,
      time: dataArray.created_utc,
      upvotes: dataArray.ups,
      upvoteRatio: dataArray.upvote_ratio,
      commentCount: dataArray.num_comments
    }
    return titleData;
  }

  mapCommentData(dataArray: any): Array<models.CommentData> {
    let commentData: Array<models.CommentData> = new Array<models.CommentData>();
    if (dataArray && dataArray.length > 0) {
      for (let i = 0; i < dataArray.length - 1; i++) {
        let comment: models.CommentData = new models.CommentData();
        comment = {
          author: dataArray[i].data.author,
          comment: dataArray[i].data.body,
          replies: dataArray[i].data.replies ?
            this.mapCommentData(dataArray[i].data.replies.data.children) : [],
          isVisible: true
        }
        commentData.push(comment);
      }
    }
    return commentData;
  }

  getRedditHomeData(apiUrl: string): Observable<Array<models.HomePageDetailData>> {
    return this.http.get(`https://${apiUrl}.json`)
      .pipe(map(response => this.mapHomeAPIData(response)));
  }

  mapHomeAPIData(apiData: any): Array<models.HomePageDetailData> {
    let homePageModifiedData: Array<models.HomePageDetailData> = new Array<models.HomePageDetailData>();
    let data: any = apiData.data.children;
    for (let i = 0; i < data.length - 1; i++) {
      let detailData: models.HomePageDetailData = new models.HomePageDetailData();
      detailData = {
        discussionTitle: data[i].data.title,
        author: data[i].data.author,
        showImg: data[i].data.thumbnail.indexOf('https://') == -1 ? false : true,
        imgUrl: data[i].data.thumbnail,
        imgHeight: `${data[i].data.thumbnail_height}px`,
        imgWidth: `${data[i].data.thumbnail_width}px`,
        redirectUrl: `www.reddit.com${data[i].data.permalink}`
      }
      homePageModifiedData.push(detailData);
    }
    return homePageModifiedData;
  }

}