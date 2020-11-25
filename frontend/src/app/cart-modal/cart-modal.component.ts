import { DataStoreService } from '../../app/services/data-store.service';
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
  
  removeItem(value,product,variants,size){

     let inputValue = document.getElementById(value).value || '0';
     if(product.available){
      let updatedCount = parseInt(inputValue)>0? parseInt(inputValue) - 1: 0;
      document.getElementById(value).value = updatedCount;
      localStorage.setItem(variants._id,updatedCount);
      let customVarId = variants._id+'pro'+size;
      this.cartService.RemoveItemFromCart.emit({
        variant_id : customVarId ,
        product_id : product._id, 
        updatedCount:updatedCount,
      });
     }
     else{
       alert("Product is not available");
     }
    
  }

  addItem(value,product,variants,size){
    let takenItemCount = localStorage.getItem(variants._id) || '0';
    
    if(product.available){
    let inputValue = document.getElementById(value).value || 0;
    if(parseInt(takenItemCount)< parseInt(variants.quantity ))
    {
      let updatedCount = parseInt(inputValue)>=0? parseInt(inputValue)+ 1: 0;
      document.getElementById(value).value = updatedCount;
      localStorage.setItem(variants._id ,updatedCount);

      let customVarId = variants._id+'pro'+size;
      this.cartService.AddItemToCart.emit({
        variant_id : customVarId ,
        product_id : product._id, 
        updatedCount:updatedCount,
        color:variants.color,
        size : size, 
        name:product.name, 
        price: product.price,
        product: product,
        v_id: variants._id
      });
    }else
      alert('Product Is not available');
    }
    else{
      alert("Product is not available");
    }
 }
}

