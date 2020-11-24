import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private register_api = "http://localhost:4006/register";
  private login_api = "http://localhost:4006/login";

  constructor(private httpClient: HttpClient, private router: Router ) { }

  /**
  * Check for expiration and if token is still existing or not
  * @return {boolean}
  */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  // Simulate jwt token is valid
  isTokenExpired(): boolean {
    return false;
  }

   /**
   * To logout user
   */
  logOut():void {
    this.clear();
    this.router.navigate(['/login']);
  }

   /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }
  
   /**
   * To register user 
   */
  public registerUser(user) : void{
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
   
  }
  public signInUser(user) : void{
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const body = user;
    this.httpClient.post<any>(this.login_api, body, { headers }).subscribe(data => {
      if(data.user){
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', data.token);
      }
      else{
        alert('Try again');
      }
    });
   
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }
}


