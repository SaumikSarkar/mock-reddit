import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'mockreddit', pathMatch: 'full' },
  {
    path: 'mockreddit',
    loadChildren: () => import('./modules/reddit-page-view/reddit-page-view.module')
      .then(module => module.RedditPageViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
