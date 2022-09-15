import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private _httpclient: HttpClient) {}

  getclient(): Observable<Client[]> {
    return this._httpclient.get<Client[]>('https://jsonplaceholder.typicode.com/users');
  }
}
