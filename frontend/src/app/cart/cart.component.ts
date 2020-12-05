import { EditCartModalComponent } from './../edit-cart-modal/edit-cart-modal.component';
import { Variants } from './../models/Products';
import { CartService } from './../services/cart.service';
import { DataStoreService } from './../services/data-store.service';
import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from './../cart-modal/cart-modal.component';
import {MatDialog} from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,
    private dataStoreService: DataStoreService,
    private router:Router,
    public dialog: MatDialog
    ){}
   selectedProducts : Array<any> = [];
   selectedVariants: Array<any> = [];
  ngOnInit() {
    this.cartService.AddItemToCart
      .pipe()
      .subscribe((data) => {
        this.dataStoreService.cartItemCounter.emit(1);
      
        let product = this.selectedProducts.find(item => item.variant_id  == data.variant_id );
          if(product){
            product.updatedCount = data.updatedCount;
          }
          else{
            this.selectedProducts.push(data);
          }
          localStorage.setItem('products',JSON.stringify(this.selectedProducts));
          console.log(localStorage);
          
  
        }
      );

      this.cartService.RemoveItemFromCart
      .pipe()
      .subscribe((data) => {
        this.dataStoreService.cartItemCounter.emit(-1);
        let product = this.selectedProducts.find(item => item.variant_id  == data.variant_id );
          if(product){
            if(data.updatedCount == 0) {
              this.selectedProducts = this.selectedProducts.filter(item => item.variant_id  != data.variant_id )
            }
            else
            product.updatedCount = data.updatedCount = data.updatedCount;
          }
          localStorage.setItem('products',JSON.stringify(this.selectedProducts)); 
        }
      );
   }

  
   clear(){
    this.selectedProducts.map(item =>  localStorage.removeItem(item.v_id) );
    localStorage.removeItem("products");
    location.reload();
   }
   goToCheckout(products){
     localStorage.setItem('products',JSON.stringify(this.selectedProducts));
     if(this.selectedProducts.length>0)
     this.router.navigate(['/checkout']);
     
   }
   openDialog(product,input_count,input_id) {
     console.log("inptu id",input_id);
     let variant_id  = input_id.slice(0,24);
    let variants = product.variants.find(item => variant_id == item._id);
    if(variants.hasOwnProperty('row_id')) delete product.row_id
    if(variants){  
      variants[input_id] = input_count;
      variants.row_id = input_id;
      variants.isVisible = true;
    }
 
    this.dialog.open(ModalComponent, {
      data: {
       product:  product,
       input_value: input_count,
       input_id : input_id
      }
    });
  }
}