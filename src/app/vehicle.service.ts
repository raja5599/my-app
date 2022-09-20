import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private _httpclient: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this._httpclient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1'
    );
  }
  getVehicle(id: string): Observable<Vehicle[]> {
    return this._httpclient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }

  getFilterVehicles(filterterm: string): Observable<Vehicle[]> {
    return this._httpclient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?filter=' +
        filterterm
    );
  }

  getpagedVehicles(pageNo: number): Observable<Vehicle[]> {
    return this._httpclient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?limit=10&page=' +
        pageNo
    );
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this._httpclient.post<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',
      vehicle
    );
  }

  updateVehicle( id:string,vehicle: Vehicle): Observable<Vehicle> {
    return this._httpclient.put<Vehicle>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id,
      vehicle
    );
  }
  getSortedVehicles(column: string, order: string): Observable<Vehicle[]> {
    return this._httpclient.get<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '?sortBy=' +
        column +
        '&order=' +
        order
    );
  }

  deleteVehicles(id: string): Observable<Vehicle[]> {
    return this._httpclient.delete<Vehicle[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction' +
        '/' +
        id
    );
  }
}