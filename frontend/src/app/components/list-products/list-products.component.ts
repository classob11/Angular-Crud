import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
    listProducts:Product [] = [
    {name: 'Coca Cola', description:'Bebida con azucar', price:4, stock:200},
    {name: 'Corona', description:'Bebida con alcohol', price:5, stock:300},
  ]

  constructor() {}
   
  ngOnInit(): void {
    
  }

}
