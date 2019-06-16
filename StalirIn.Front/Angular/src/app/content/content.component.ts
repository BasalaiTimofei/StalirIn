import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';
import { Product } from '../models/product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  text = [];
  products = Array<Product>();

  constructor(private productService: ProductService) {
    for (let i = 0; i < 10; i++) {
      this.text[i] = 'TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT';    
    }
   }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}