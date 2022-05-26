import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.forgetpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],

    });
  }

  OnSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetpasswordForm.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.forgetpasswordForm.value))
}
}
