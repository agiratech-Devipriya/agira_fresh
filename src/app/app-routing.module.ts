import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBookComponent } from './e-book/e-book.component';
import { PodcastComponent } from './podcast/podcast.component';
import { ArticleComponent } from './article/article.component';
import { Card1Component } from './card1/card1.component';

const routes: Routes = [
// {
//   path :'e-book',
//   component : EBookComponent
// },
{
  path :'podcast',
  component : PodcastComponent
},
// {
//   path :'article',
//   component : ArticleComponent
// },
// {
//   path :'card1',
//   component : Card1Component
// }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
