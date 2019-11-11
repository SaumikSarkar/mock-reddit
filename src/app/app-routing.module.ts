import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'redditpage', pathMatch: 'full' },
  {
    path: 'redditpage',
    loadChildren: () => import('./modules/reddit-page-view/reddit-page-view.module')
      .then(module => module.RedditPageViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
