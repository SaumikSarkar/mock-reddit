import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditPageRoutingModule } from './reddit-page-routing.module';

import { CommentPageComponent } from './components/comment-page/comment-page.component';
import { CommentComponent } from './components/comment/comment.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    CommentPageComponent,
    CommentComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RedditPageRoutingModule
  ]
})
export class RedditPageViewModule { }
