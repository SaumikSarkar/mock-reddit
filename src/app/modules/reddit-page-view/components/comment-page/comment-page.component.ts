import { Component, OnInit } from '@angular/core';
import { PageViewService } from '../../_services/page-view.service';
import * as models from '../../_models';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit {

  //********* Variables ************/

  pageData: models.APIModifiedData = new models.APIModifiedData();

  //****************************** */

  constructor(private pageViewService: PageViewService) { }

  ngOnInit() {
    this.getViewData();
  }

  getViewData() {
    this.pageViewService.getPageData().subscribe((data: models.APIModifiedData) => {
      this.pageData = data;
      console.log(this.pageData);
    });
  }

}
