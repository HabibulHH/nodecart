import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private register_api = "http://localhost:4006/register";
  private login_api = "http://localhost:4006/login";

  constructor(private httpClient: HttpClient, private router: Router ) { }

  public registerUser(user){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = user;
    this.httpClient.post<any>(this.register_api, body, { headers }).subscribe(data => {
      if(data.user){
        alert('Login with new user name and password');
        location.reload();
      }else{
        alert("Try again");
      }
        
    });
    //return this.httpClient.post(this.register_api,user);
  }
  public signInUser(user){
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = user;
    this.httpClient.post<any>(this.login_api, body, { headers }).subscribe(data => {
      if(data.user){
        this.router.navigate(['/products'])
      }
      else{
        alert('Try again');
      }
    });
    //return this.httpClient.post(this.register_api,user);
  }
}
