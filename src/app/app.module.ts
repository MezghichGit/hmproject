import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UpdateArticleComponent } from './update-article/update-article.component';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateArticleComponent,

    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
 // article: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
