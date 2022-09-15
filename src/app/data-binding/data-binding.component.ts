import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


  public age:number = 22;
  public name: string = "Ram";
  public isIndian: boolean = true; 

  public phones: number[] = [94949, 848484, 737373]
  public courses: string[] = [ 'Angular', 'React'];

  public user = {name:'jhone', city:'texas'}


  public student: Student = {
    name: 'Ajay',
    id: 'N123',
    marks: 99
  };
  public employee: Employee = {
    name: 'Arjun',
    id: 'AS12345',
    company: 'apple',
    package: 2500000
  };

  public users: User [] =
  [
    {name:'jhone',city:'texas'},
    {name:'bittu',city:'vegas'},
    {name:'smith',city:'delhi'},
  ]

  public students: Student[] =
  [
    {name:'Anil', id:'N123',marks: 90},
    {name:'bittu', id:'N124',marks: 80},
    {name:'raju', id:'N125',marks: 70},
  ]
   
  constructor() { }

  ngOnInit(): void {
  }

}
