import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartcount:BehaviorSubject<any> = new BehaviorSubject(0);

  constructor() { }

  setvalu(value:any){
    this.cartcount.next(value)
  }
  getvalue(){
    return this.cartcount.asObservable();
  }
}
