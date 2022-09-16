import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  public cartCount: number = 0;

  constructor(private _cartservice:CartService) { 

    this._cartservice.getvalue().subscribe(
      (data:any)=>{
        this.cartCount = data;
      }
    )
  }

  ngOnInit(): void {
  }

}
