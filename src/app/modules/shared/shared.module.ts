import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedditHeaderComponent } from './components/reddit-header/reddit-header.component';

@NgModule({
  declarations: [
    RedditHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RedditHeaderComponent
  ]
})
export class SharedModule { }
