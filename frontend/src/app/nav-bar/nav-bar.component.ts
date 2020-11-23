import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../app/services/data-store.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  totalCount = 0;
  constructor(private dataStoreService:DataStoreService) { }

  ngOnInit() {
    this.dataStoreService.cartItemCounter
    .pipe()
    .subscribe(count => {
      if(this.totalCount >0)
        this.totalCount =  this.totalCount+count;
      }
    );
  }

}
