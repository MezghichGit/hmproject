import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MainarticleComponent } from './mainarticle/mainarticle.component';
import { ListArticleComponent } from './list-article/list-article.component';


@NgModule({
  declarations: [
    MainarticleComponent,
    ListArticleComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
