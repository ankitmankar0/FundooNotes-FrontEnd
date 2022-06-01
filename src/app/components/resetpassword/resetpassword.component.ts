import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm!: FormGroup;
  submitted = false;
  hide: boolean = true;
  token: any

  constructor(private forrmBuilder: FormBuilder, private user: UserServiceService, private activateRoute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.token = this.activateRoute.snapshot.paramMap.get('token')
    this.resetpasswordForm = this.forrmBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

  }

  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetpasswordForm.valid) {
      let reqData = {
        newPassword: this.resetpasswordForm.value.password,
        confirmPassword: this.resetpasswordForm.value.confirmPassword,
      }
      console.log(this.token)
      this.user.resetpassword(reqData, this.token).subscribe((response: any) => {
        console.log("Password chnaged successfuly", response);
      })
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetpasswordForm.value))
  }

  ShowPassword() {
    this.hide = !this.hide;
  }
}
