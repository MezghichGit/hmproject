import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class listarticleComponent implements OnInit {

 //listarticles!:article[];
  priceMax!   : number;
  p!:number;
 articles: any;
  
  constructor( ){}
  ngOnInit(): void {
    
  }
  
  
 
  // ngOnInit(): void {
  //   this.service1.getarticle().subscribe(data=>this.article=data);
  // }
}
    
