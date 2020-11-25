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

}
