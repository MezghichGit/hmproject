import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class listarticleComponent implements OnInit {

  article!: article[];
  priceMax!   : number;
  p!:number;
 //article: any;
  
  constructor( ){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  
 
  // ngOnInit(): void {
  //   this.service1.getproduct().subscribe(data=>this.article=data);
  // }
}
    
