import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as models from '../../_models';

@Component({
  selector: 'app-discussion-detail',
  templateUrl: './discussion-detail.component.html',
  styleUrls: ['./discussion-detail.component.scss']
})
export class DiscussionDetailComponent implements OnInit {

  //*********** Variables **********/

  @Input('discussion-data') discussionData: models.HomePageDetailData;
  @Output('set-discussion-url') redirectUrl: EventEmitter<string> = new EventEmitter<string>();

  //***************************** */

  constructor() { }

  ngOnInit() {
  }

  redirectToDiscussion(url: string) {
    this.redirectUrl.emit(url);
  }

}