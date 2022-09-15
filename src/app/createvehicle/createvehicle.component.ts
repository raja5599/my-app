import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css'],
})
export class CreatevehicleComponent implements OnInit {


  public vehicleForm: FormGroup = new FormGroup({
    vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    id: new FormControl(),
  });

  constructor(private _vehiclesevice: VehicleService) {}

  ngOnInit(): void {}

  submit(){
    console.log( this.vehicleForm.value);

    this._vehiclesevice.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert('Created succesfully !!!');
      
      },
      (err:any)=>{
        alert('internal server error');
      }
    )

  }

}
