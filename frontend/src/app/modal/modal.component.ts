import { Variants } from './../models/Products';
import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { count } from 'console';

export interface DialogData {
  color: String,
  size: [],
  quantity: Number,
}
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any ) {}

  
  ngOnInit() {

  }
  
  removeItem(value,product,variants){

     let inputValue = document.getElementById(value).value;
     if(product.available){
      let updatedCount = parseInt(inputValue)>=0? parseInt(inputValue) - 1: 0;
      document.getElementById(value).value = updatedCount;
      localStorage.setItem(variants._id,updatedCount);
     }
     else{
       alert("Product is not available");
     }
    
  }

  addItem(value,product,variants){

    let takenItemCount =  localStorage.getItem(variants._id) || 0;
    console.log(takenItemCount,'from local storage');
    
    if(product.available){
    let inputValue = document.getElementById(value).value;
    if(parseInt(takenItemCount)< parseInt(variants.quantity ))
    {
      let updatedCount = parseInt(inputValue)>=0? parseInt(inputValue)+ 1: 0;
      document.getElementById(value).value = updatedCount;
      localStorage.setItem(variants._id,updatedCount);
    }else
      alert('Product Is not available');
    }
    else{
      alert("Product is not available");
    }
    console.log(product);
 }
}
