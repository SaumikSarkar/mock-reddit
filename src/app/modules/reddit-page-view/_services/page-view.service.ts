import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as models from '../_models';

@Injectable({
  providedIn: 'root'
})
export class PageViewService {

  //************ Variables ************/

  apiUrl: string = 'https://www.reddit.com/r/AskReddit/comments/duib1h/which_book_should_a_depressed_person_absolutely/.json';

  //********************************* */

  constructor(private http: HttpClient) { }

  getPageData(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(map(response => this.mapAPIData(response)));
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
            this.mapCommentData(dataArray[i].data.replies.data.children) : []
        }
        commentData.push(comment);
      }
    }
    return commentData;
  }

}