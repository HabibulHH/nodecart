import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  name:string;
  password:string;
  email:string;
  last_name:string;
  ngOnInit() {
  }
  register(){
   this.loginService.registerUser({
     name:this.name,
     password:this.password,
     email:this.email,
     last_name:this.last_name
    });
  }

}
