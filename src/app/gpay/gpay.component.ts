import { Component, OnInit } from '@angular/core';
import { HdfcService } from '../hdfc.service';

@Component({
  selector: 'app-gpay',
  templateUrl: './gpay.component.html',
  styleUrls: ['./gpay.component.css']
})
export class GpayComponent implements OnInit {
public amount: number= 0;

  constructor(private _hdfcsevice: HdfcService) { }
 
  ngOnInit(): void {
  }


  withdraw(){
     this._hdfcsevice.withdraw(this.amount);
  }
  deposit(){
     this._hdfcsevice.deposit(this.amount);
  }
  showbalance(){
     alert(this._hdfcsevice.getBalance());
  }

}
