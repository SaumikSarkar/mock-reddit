import { Component, OnInit } from '@angular/core';
import { PageViewService } from '../../_services/page-view.service';
import * as models from '../../_models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  //********* Variables **********/

  homePageData: Array<models.HomePageDetailData> = new Array<models.HomePageDetailData>();

  criterias: Array<string>;
  criteria: string = 'Select';

  //**************************** */

  constructor(private pageViewService: PageViewService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.setDropdownData();
    this.getPageLoadData();
  }

  getPageLoadData() {
    let url: string = 'www.reddit.com/';
    if (this.criteria != 'Select') {
      url += this.criteria.toLowerCase();
    }
    this.pageViewService.getRedditHomeData(url).subscribe((data) => {
      this.homePageData = data;
      console.log(this.homePageData);
    });
  }

  goToDiscussion(url: string) {
    this.router.navigate(['../discussion', url], {relativeTo: this.route});
  }

  setDropdownData() {
    this.criterias = ['Hot','New', 'Controversial', 'Top', 'Rising'];
  }

}
