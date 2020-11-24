import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormBuilder, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private loginService:LoginService,private formBuilder: FormBuilder) { }
  user = new User();
  email_signIn: string;
  password_signIn:string;
  userForm;
  userError:string;
  submitted = false;
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
  }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });
  
  }
  get f() { return this.registerForm.controls; }

  signIn(){
    this.loginService.signInUser({
      email:this.email_signIn,
      password:this.password_signIn
     });
  }
  onSubmit() {
    this.submitted = true;
    this.user.name = this.registerForm.controls["name"].value;
    this.user.email = this.registerForm.controls["email"].value;
    this.user.password = this.registerForm.controls["password"].value;
    this.user.last_name = this.registerForm.controls["last_name"].value;
    this.loginService.registerUser(this.user);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

}
