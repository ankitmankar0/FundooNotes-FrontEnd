import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/userService/user-service.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserServiceService) { }

  ngOnInit(): void {
    this.forgetpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }

  OnSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.forgetpasswordForm.valid) {
      let reqData = {
        email: this.forgetpasswordForm.value.email,
      }
      this.user.forgetpassword(reqData).subscribe((response: any) => {
        console.log(response);
      })
    }

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetpasswordForm.value))
  }
}
