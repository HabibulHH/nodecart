import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit {

  products = [];
  constructor(private productSewrvice:ProductService) { }

  ngOnInit() {
    this.productSewrvice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }

}
