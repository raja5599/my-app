import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from './items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private _httpclient: HttpClient) { }

  getitems():Observable<Items[]>{

    return this._httpclient.get<Items[]>('https://fakestoreapi.com/products');
   
  }
}
