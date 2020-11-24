import { ModalComponent } from './../cart-modal/cart-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../app/services/product.service";


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  constructor(private productSewrvice:ProductService,public dialog: MatDialog) { }

  ngOnInit() {
    this.productSewrvice.sendGetRequest().subscribe((data: any[])=>{
      console.log(data);
      this.products = data;
    })  
  }
  openDialog(product) {
    
    this.dialog.open(ModalComponent, {
      data: {
       product:  product
      }
    });
  }


}
