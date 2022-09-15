import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dshboard',
  templateUrl: './dshboard.component.html',
  styleUrls: ['./dshboard.component.css']
})
export class DshboardComponent implements OnInit {
  [x: string]: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('my app-token');
    this.router.navigateByUrl('/login');
  }

}
