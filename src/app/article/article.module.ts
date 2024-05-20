import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MainarticleComponent } from './mainarticle/mainarticle.component';
<<<<<<< HEAD
import { AjoutArticleComponent } from './ajout-article/ajout-article.component';
=======
import { UpdateArticleComponent } from './update-article/update-article.component';
>>>>>>> f63da524eece18f9638099a7167f8d175816e58c


@NgModule({
  declarations: [
    MainarticleComponent,
<<<<<<< HEAD
    AjoutArticleComponent
=======
    UpdateArticleComponent
>>>>>>> f63da524eece18f9638099a7167f8d175816e58c
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule
  ]
})
export class ArticleModule { }
