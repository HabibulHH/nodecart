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
  
  removeItem(input_id,product,variants,size){
     const inputElement: HTMLInputElement = document.getElementById(input_id) as HTMLInputElement
     const inputValue: string = inputElement.value;
     if(product.available){
      let updatedCount = parseInt(inputValue)>0? parseInt(inputValue) - 1: -1;
      if(updatedCount < 0) return;
      inputElement.value = updatedCount.toString(); 
      localStorage.setItem(variants._id,updatedCount.toString());
      let customVarId = variants._id+variants.color+size;
      this.cartService.RemoveItemFromCart.emit({
        variant_id : customVarId ,
        product_id : product._id, 
        updatedCount:updatedCount,
        input_id:input_id,
        v_id: variants._id,
      });
     }
     else{
       alert("Product is not available");
     }
    
  }
  getInpuValue(variant,size){
    const InputId = variant._id + variant.color + size;
    let selections =  localStorage.getItem('products');
    if(selections){
      let cartItems = selections.replace(/\\n/g, "\\n")  
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
      cartItems = cartItems.replace(/[\u0000-\u0019]+/g,""); 
  
      let selectedProducts = JSON.parse(cartItems);
      let product =  selectedProducts.find(item=> item.variant_id === InputId);
      console.log(product);
      
       return product? product.updatedCount : 0;
    }
    else{
          return 0;
    }
    
  }

  addItem(input_id,product,variants,size){
    let takenItemCount = localStorage.getItem(variants._id) || '0';
    if(product.available){
      const inputElement: HTMLInputElement = document.getElementById(input_id) as HTMLInputElement
      const inputValue: string = inputElement.value;
      if(parseInt(takenItemCount)< parseInt(variants.quantity ))
      {
        let updatedCount = parseInt(inputValue)>=0? parseInt(inputValue)+ 1: 0;
        inputElement.value = updatedCount.toString(); 
        localStorage.setItem(variants._id ,updatedCount.toString());

        let customVarId = variants._id+variants.color+size;
        product.showOnly = true;
        this.cartService.AddItemToCart.emit({
          variant_id : customVarId ,
          product_id : product._id, 
          updatedCount:updatedCount,
          color:variants.color,
          size : size, 
          name:product.name, 
          price: product.price,
          product: product,
          v_id: variants._id,
          input_id:input_id
        });
      }else
      alert('Product Is not available');
    }
    else{
      alert("Product is not available");
    }
 }
}

