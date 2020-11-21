import { Variants } from './../models/Products';
import { Component, OnInit , Inject} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

   selectedProducts : Array<object> = [];
   selectedVariants: Array<object> = [];
  ngOnInit() {
      let keys = Object.keys(localStorage),
      i = keys.length;
      while ( i-- ) {
        if(keys[i].includes('pro')){
          let viewModel = JSON.parse(localStorage.getItem(keys[i]));
          this.selectedProducts.push(viewModel);   
        }
     }
  }

}
