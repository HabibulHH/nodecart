import { Product, Variants } from './../models/Products';
import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


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
    //localStorage.clear();
    this.dialog.open(ModalComponent, {
      data: {
       product:  product
      }
    });
  }


}
