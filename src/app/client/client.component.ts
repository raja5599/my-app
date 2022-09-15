import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

   public clients: Client [] = [];

  constructor(private _clientervice:ClientService) { 
    this._clientervice.getclient().subscribe(
      (data:any)=>{
        this.clients = data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )
  
    }


  ngOnInit(): void {
  }

}
