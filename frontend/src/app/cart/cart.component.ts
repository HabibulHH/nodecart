import { CartService } from './../services/cart.service';
import { Variants } from './../models/Products';
import { Component, OnInit , Inject} from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService){}
   selectedProducts : Array<object> = [];
   selectedVariants: Array<object> = [];
   test =''
  ngOnInit() {
    this.cartService.AddItemToCart
      .pipe()
      .subscribe((data) => {
        let product = this.selectedProducts.find(item => item.variant_id  == data.variant_id );
          if(product){
            product.updatedCount = data.updatedCount;
          }
          else{
            this.selectedProducts.push(data);
          }
        }
      );
   }
}