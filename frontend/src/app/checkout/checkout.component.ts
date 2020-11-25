import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from './../services/cart.service';
import { CheckoutService } from './checkout.service';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { timeEnd } from 'console';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selections
  totalPrice: any;
  constructor( private checkoutServices: CheckoutService,
    private cartService:CartService,
    private router:Router,
    private route: ActivatedRoute,
    ) { 
    
    }
  
  ngOnInit() {
  
    let selections =  localStorage.getItem('products');
    let trimmed = selections.replace(/\\n/g, "\\n")  
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
    trimmed = trimmed.replace(/[\u0000-\u0019]+/g,""); 
  
    console.log(JSON.parse(trimmed),'products');
   this.checkoutServices.checkOutProducts(JSON.parse(trimmed));
   localStorage.removeItem('products');
   this.cartService.ShowBill
      .pipe()
      .subscribe(({data}) => {
        this.totalPrice = data['totalPrice']
      });

  }
  
}
