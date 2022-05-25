import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit(){
    console.log("inside submit");
    if(this.loginForm.valid)
    {
      console.log("valid Data", this.loginForm.value);
      let data ={
        email: this.loginForm.value.email,       
        password: this.loginForm.value.password,
      }
    }
    else
    {
      console.log("invalid data", this.loginForm.value)
    }

  }

}
