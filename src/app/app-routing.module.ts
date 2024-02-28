import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EBookComponent } from './e-book/e-book.component';
import { PodcastComponent } from './podcast/podcast.component';
import { ArticleComponent } from './article/article.component';
import { Card1Component } from './card1/card1.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { Article1Component } from './article1/article1.component';
import { EBook1Component } from './e-book1/e-book1.component';
import { Podcast1Component } from './podcast1/podcast1.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent},
{
  path :'e-book',
  component : EBookComponent
},
{
  path :'podcast',
  component : PodcastComponent
},
{
  path :'article',
  component : ArticleComponent
},
{
  path :'people',
  component :PeopleComponent
},
{
  path :'card1',
  component : Card1Component
},
{
  path :'article1',
  component : Article1Component
},
{
  path :'e-book1',
  component :EBook1Component
},
{
  path :'podcast1',
  component :Podcast1Component
}
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
