import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm!: FormGroup;
  submitted=false;
  hide : boolean = true;

  constructor(private forrmBuilder: FormBuilder){

  }
  ngOnInit(): void {
    this.resetpasswordForm = this.forrmBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }

    OnSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.resetpasswordForm.invalid) {
          return;
      }
  
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetpasswordForm.value))
  }
}
