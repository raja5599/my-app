import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  public vehicle:Vehicle = <Vehicle>{};

  constructor( private _vehicleService:VehicleService, private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(
      (data:any)=>{
        this.getvehicle( data.id );
      }
    )
   }

  ngOnInit(): void {
  }

  getvehicle(id:string){
    this._vehicleService.getVehicle(id).subscribe(
      (data:any)=>{
        this.vehicle = data;
      }
    )
  }

}
