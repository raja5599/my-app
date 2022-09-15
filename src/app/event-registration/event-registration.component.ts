import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registration',
  templateUrl: './event-registration.component.html',
  styleUrls: ['./event-registration.component.css']
})
export class EventRegistrationComponent implements OnInit {

 public name:string = '';

 public names:string[] = []


  constructor() { }

  ngOnInit(): void {
  }

  register() {
    this.names.push( this.name ) 

  }
  delete(){
    this.names.pop();
  }
  deleteAll(){
    this.names = [];
  }
  deleteEach(i:number){
    this.names.splice( i,1);
  }
  reverse(){
    this.names.reverse();
  }

}
