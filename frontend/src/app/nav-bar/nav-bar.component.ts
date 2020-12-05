import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../app/services/data-store.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  totalCount = 0;
  constructor(private dataStoreService:DataStoreService,private loginService: LoginService) { }

  ngOnInit() {
    this.dataStoreService.cartItemCounter
    .pipe()
    .subscribe(count => {
      if(this.totalCount >0) 
       console.log('added');
       console.log('added');
       this.totalCount =  this.totalCount+count;
       if(this.totalCount < 0) this.totalCount =0;
      }
    );
  }
  logOut(){
    this.loginService.logOut();
  }
  clear(){
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
  
    let cartItems =  JSON.parse(trimmed);

    let   selectedVariants =  cartItems.map(item=> Object.values(item.product.variants));
    let variantsIdCollection = [];
     selectedVariants.map(i=> i.map(i=>{variantsIdCollection.push(i._id)}));
    variantsIdCollection.map(i=> localStorage.removeItem(i));
    localStorage.removeItem("products");
  }

}
