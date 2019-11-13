import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CommentPageComponent } from './components/comment-page/comment-page.component';
import { CommentComponent } from './components/comment/comment.component';

const routes: Routes = [
  { path: '', redirectTo: 'commentpage', pathMatch: 'full'},
  { path: 'commentpage', component: CommentPageComponent}
];

@NgModule({
  declarations: [
    CommentPageComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RedditPageViewModule { }
