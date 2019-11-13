import { Component, OnInit, Input } from '@angular/core';
import * as models from '../../_models';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  //******** Variables **********/

  @Input('comment-data') commentData: models.CommentData;

  //************************** */

  constructor() { }

  ngOnInit() {
  }

}
