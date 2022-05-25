import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }
  OnSubmit() {
    console.log("inside submit");
    if (this.registerForm.valid) {
      console.log("valid data", this.registerForm.value);
      let data = {
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email: this.registerForm.value.email,       
        password: this.registerForm.value.password,
      }
    }
    else {
      console.log("Invalid Data", this.registerForm.value);
    }
  }
}