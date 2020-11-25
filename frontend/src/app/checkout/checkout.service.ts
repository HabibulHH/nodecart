import { CartService } from './../services/cart.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private checkout_api = "http://localhost:4007/checkout";


  constructor(private httpClient: HttpClient,private cartServices:CartService) { 

  }
  public checkOutProducts(selectedProducts) :any{
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = selectedProducts;
    return this.httpClient.post<any>(this.checkout_api, body, { headers }).subscribe(data => {
      if(data){
       console.log(data);
       this.cartServices.ShowBill.emit({data:data})
       
      }else{
        alert("Try again");
      }
     });
    }
}
