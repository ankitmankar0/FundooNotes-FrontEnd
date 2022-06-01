import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  token: any
  constructor(private formBuilder: FormBuilder, private user: UserServiceService) {
    this.token = localStorage.getItem("token");
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.valid) {
      let reqData = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.login(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.data)
      })
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
  }
}
