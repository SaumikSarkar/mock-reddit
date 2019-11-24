import { Component, OnInit } from '@angular/core';
import { PageViewService } from '../../_services/page-view.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private pageViewService: PageViewService) { }

  ngOnInit() {
    this.getPageLoadData();
  }

  getPageLoadData() {
    this.pageViewService.getRedditHomeData('www.reddit.com/').subscribe((data) => {
      console.log(data);
    });
  }

}
