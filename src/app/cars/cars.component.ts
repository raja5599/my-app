import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public cars:string ='';
  public message:string ='';

  constructor(private _carservice:CarService) { 
    this.message = this._carservice.message;
  }

  ngOnInit(): void {
  }

}
