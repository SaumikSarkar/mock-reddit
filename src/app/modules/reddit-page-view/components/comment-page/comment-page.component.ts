import { Component, OnInit } from '@angular/core';
import { PageViewService } from '../../_services/page-view.service';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.scss']
})
export class CommentPageComponent implements OnInit {

  constructor(private pageViewService: PageViewService) { }

  ngOnInit() {
    this.getViewData();
  }

  getViewData() {
    this.pageViewService.getPageData().subscribe(data => {
      console.log(data);
    });
  }

}
