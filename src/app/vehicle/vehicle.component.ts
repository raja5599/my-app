import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {

  public filterTerm: string = '';

  public column: string = '';
  public order: string = '';

  public vehicles: Vehicle[] = [];

  constructor(private _Vehicleservice: VehicleService,private router:Router) {
    this._Vehicleservice.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  ngOnInit(): void {}

  filter() {
    this._Vehicleservice.getFilterVehicles(this.filterTerm).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  sort() {
    this._Vehicleservice.getSortedVehicles(this.column,this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }
  page(pageNo: number) {
    this._Vehicleservice.getpagedVehicles(pageNo).subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  delete(id: string) {
    this._Vehicleservice.getVehicles().subscribe(
      (data: any) => {
        alert('deleted successfully !!!!');
        this.vehicles = data;
      },
      (err: any) => {
        alert('internal server error');
      }
    );
  }

  view(id:string){
     this.router.navigateByUrl('/dashboard/vehicle-details' + '/' + id);
  }
  edit(id:string){
    this.router.navigateByUrl('/dashboard/edit-vehicle'+'/'+id);
  }
}
