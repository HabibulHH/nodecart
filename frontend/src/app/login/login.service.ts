import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private register_api = "http://localhost:4006/register";

  constructor(private httpClient: HttpClient) { }

  public registerUser(user){
    alert('came here');

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
}
