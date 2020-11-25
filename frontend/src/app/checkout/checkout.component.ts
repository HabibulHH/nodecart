import { Route, Router } from '@angular/router';
import { CartService } from './../services/cart.service';
import { CheckoutService } from './checkout.service';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  selections;
  constructor( private checkoutServices: CheckoutService,
    private cartService:CartService,
    private router:Router,
    ) { 
    
    }
  
  ngOnInit() {
    this.cartService.SendSelectionTocheckout
    .pipe()
    .subscribe((data) => {
       this.checkoutServices.checkOutProducts(data);
    });
    console.log(this.selections);
    
  
   this.cartService.ShowBill
      .pipe()
      .subscribe((data) => {
        console.log(data,'data came from serve');
      });

  }
  
}
