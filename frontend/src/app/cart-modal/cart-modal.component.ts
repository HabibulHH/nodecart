import { Variants } from './../models/Products';
import { DataStoreService } from '../data-store.service';
import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CartService } from '../services/cart.service';


export interface DialogData {
  color: String,
  size: [],
  quantity: Number,
}
@Component({
  selector: 'app-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) 
  public data: any, 
  private dataStore:DataStoreService , 
  private cartService:CartService) {}

  
  ngOnInit() {

  }
  
  removeItem(value,product,variants){

     let inputValue = document.getElementById(value).value;
     if(product.available){
      let updatedCount = parseInt(inputValue)>0? parseInt(inputValue) - 1: 0;
      document.getElementById(value).value = updatedCount;
      localStorage.setItem(variants._id,updatedCount);
      this.dataStore.cartItemCounter.emit(updatedCount);
     }
     else{
       alert("Product is not available");
     }
    
  }

  addItem(value,product,variants,size){
    let takenItemCount = localStorage.getItem(variants._id) || 0;
    //console.log(takenItemCount,'from local storage');
    
    if(product.available){
    let inputValue = document.getElementById(value).value;
    if(parseInt(takenItemCount)< parseInt(variants.quantity ))
    {
      let updatedCount = parseInt(inputValue)>=0? parseInt(inputValue)+ 1: 0;
      document.getElementById(value).value = updatedCount;
      localStorage.setItem(variants._id ,updatedCount);

      localStorage.setItem(variants._id+'pro'+size,JSON.stringify({
        updatedCount:updatedCount,color:variants.color,size : size, name:product.name, price: product.price
      }));
      
      this.dataStore.cartItemCounter.emit(updatedCount);
      let customVarId = variants._id+'pro'+size;
      this.cartService.AddItemToCart.emit({
        variant_id : customVarId ,
        product_id : product._id, 
        updatedCount:updatedCount,
        color:variants.color,
        size : size, 
        name:product.name, 
        price: product.price
      });
    }else
      alert('Product Is not available');
    }
    else{
      alert("Product is not available");
    }
 }
}

