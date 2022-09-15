import { Component, OnInit } from '@angular/core';
import { Items } from '../items';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public items: Items [] = [];

  constructor(private _itemservice:ItemsService) { 
    this._itemservice.getitems().subscribe(
      (data:any)=>{
        this.items = data;
      },
      (err:any)=>{
        alert('internal server error');
      }
    )

  }

  ngOnInit(): void {
  }

}
