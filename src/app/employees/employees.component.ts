import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  public name: string = '';
  public age: number = 0;
  public company: string = '';
  public package: number =0;

  public employees: Employee [] = [];


  constructor() {}

  ngOnInit(): void {}

   add(){
    this.employees.push({
      'name': this.name,
      'age': this.age,
      'company': this.company,
      'package': this.package,
    });
  
} delete(i: number){
    this.employees.splice(i,1);
  }
  deleteAll(){
    this.employees =[];
  }
 clear(){
    this.employees =[];
  }
  PackageLowtoHigh(){
    this.employees = this.employees.sort( (a,b) => a.package - b.package );
  }
 PackageHightoLow(){
    this.employees = this.employees.sort( (a,b) => b.package - a.package );
   }

  }