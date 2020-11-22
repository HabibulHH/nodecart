import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public AddItemToCart: EventEmitter<any> = new EventEmitter<any>();
  public RemoveItemFromCart: EventEmitter<any> = new EventEmitter<any>();
}
