import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public cartCount : number= 0;

  constructor(private _cartservice:CartService) { }

  ngOnInit(): void {
  }

  add(){
    this.cartCount++;
    this._cartservice.setvalu(this.cartCount)
  }

}
