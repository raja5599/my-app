import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpclient: HttpClient) { }

  login(dta:any): Observable<any>{
    return this._httpclient.post<any>('https://reqres.in/api/login',  dta);
  }
}
