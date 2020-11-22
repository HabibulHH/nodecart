import { DataStoreService } from './../data-store.service';
import { CartService } from './../services/cart.service';
import { Variants } from './../models/Products';
import { Component, OnInit , Inject} from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService,private dataStoreService: DataStoreService){}
   selectedProducts : Array<object> = [];
   selectedVariants: Array<object> = [];
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
          
        }
      );
   }
}