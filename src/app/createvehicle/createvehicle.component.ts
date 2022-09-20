import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css'],
})
export class CreatevehicleComponent implements OnInit {


  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    id: new FormControl(),
  });

  public id: string ="";
  public isEdit: boolean = false;

  constructor(private _vehiclesevice: VehicleService,private _activateRoute:ActivatedRoute) {
    this._activateRoute.params.subscribe(
      (data:any)=>{

        if( data.id ){
          this.id = data.id;
          this.isEdit = true;
        }
        else{
          this.isEdit = false;
        }

        this._vehiclesevice.getVehicle(data.id).subscribe(
          (data2:any)=>{

            this.vehicleForm.patchValue( data2 );
          }
        )
      }
    )
  }

  ngOnInit(): void {}

  submit(){
    console.log( this.vehicleForm.value);

    if(this.isEdit){
      this._vehiclesevice.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data: any) => {
          alert('Created succesfully !!!');
        },
        (err: any) => {
          alert('internal server error');
        }
      );

    }
    else{
      this._vehiclesevice.createVehicle(this.vehicleForm.value).subscribe(
        (data: any) => {
          alert('Created succesfully !!!');
        },
        (err: any) => {
          alert('internal server error');
        }
      );

    }
  }

}
