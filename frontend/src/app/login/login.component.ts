import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  user = new User();
  email_signIn: string;
  password_signIn:string;
  ngOnInit() {
  }
  register(){
   this.loginService.registerUser(this.user);
  }

  signIn(){
    this.loginService.signInUser({
      email:this.email_signIn,
      password:this.password_signIn
     });
  }

}
