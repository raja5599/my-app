import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpclient: HttpClient) { }

  getAccounts(){
    return this._httpclient.get<Account[]>(
      'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'
    );
  }
}
