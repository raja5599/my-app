import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl('',[Validators.required,Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{12,}$")]),
  });

  constructor(private _loginSevice: LoginService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.loginForm.value);

    this._loginSevice.login(this.loginForm.value).subscribe(
      (data: any) => {
        alert('login success');
        sessionStorage.setItem('my-app-token', data.token);
        this.router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        alert('invalid credentials');
      }
    );
  }
}
