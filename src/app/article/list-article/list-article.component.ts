import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.css'
})
export class ProductsComponent implements OnInit {

  article!: article[];
  priceMax!   : number;
  p!:number;
  article: any;
  
  constructor(private service1:ProdService){}
  
  
 
  ngOnInit(): void {
    this.service1.getproduct().subscribe(data=>this.article=data);
  }
}
    
