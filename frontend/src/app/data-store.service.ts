import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor() { }
  public cartItemCounter: EventEmitter<any> = new EventEmitter<any>();
}
