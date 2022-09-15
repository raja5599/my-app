import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _httpclient: HttpClient) { }

  getmails():Observable<Mail[]>{
    return this._httpclient.get<Mail[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
