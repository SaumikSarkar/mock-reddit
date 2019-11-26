import { Component, OnInit } from '@angular/core';
import { PageViewService } from '../../_services/page-view.service';
import * as models from '../../_models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit {

  //********* Variables ************/

  pageData: models.APIModifiedData = new models.APIModifiedData();

  //****************************** */

  constructor(private pageViewService: PageViewService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getViewData();
  }

  getViewData() {
    let discussionUrl: string = this.route.snapshot.paramMap.get('discussionurl');
    this.pageViewService.getPageData(discussionUrl).subscribe((data: models.APIModifiedData) => {
      this.pageData = data;
      console.log(this.pageData);
    });
  }

}
