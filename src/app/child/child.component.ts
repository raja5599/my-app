import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public a:string = "";
   
  public b:string = "";
  @Output() public bEvent: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  send(){
    this.bEvent.emit(this.b);
  }

}
