import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public AddItemToCart: EventEmitter<any> = new EventEmitter<any>();
  public RemoveItemFromCart: EventEmitter<any> = new EventEmitter<any>();
  public ShowBill: EventEmitter<any> = new EventEmitter<any>();
  public SendSelectionTocheckout: EventEmitter<any> = new EventEmitter<any>();
}
