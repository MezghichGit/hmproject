import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MainarticleComponent } from './mainarticle/mainarticle.component';
import { listarticleComponent } from './list-article/list-article.component';

import { AjoutArticleComponent } from './ajout-article/ajout-article.component';

import { UpdateArticleComponent } from './update-article/update-article.component';



@NgModule({
  declarations: [
    MainarticleComponent,
    listarticleComponent,
    AjoutArticleComponent,
UpdateArticleComponent ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
