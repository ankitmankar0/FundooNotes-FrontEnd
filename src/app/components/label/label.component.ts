import { Component, Input, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LabelService } from 'src/app/services/label/label.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/Data/data.service';


@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  labelform!: FormGroup
  labelName: any
  isLable: boolean = false;
  isDelete: boolean = false;
  ArrayOfLabel: any
  constructor(public dialogRef: MatDialogRef<LabelComponent>, private labelservice: LabelService, @Inject(MAT_DIALOG_DATA) public data: any, public Data:DataService) { }

  

  create() {
    let reqData = {
      labelName: this.labelName
    }
    this.labelservice.postLabel(reqData).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem("token", response.data)
    })
  }

  DeleteLabel() {
    let data = {
      labelName: this.labelName
    }
    this.labelservice.deleteLabel(data.labelName).subscribe((response: any) => {
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.GetLabels();
  }

  GetLabels()
  {
    this.labelservice.getallLabel()
    .subscribe((result: any)=>{
      console.log(result);
      this.ArrayOfLabel = result.data;
      console.log(this.ArrayOfLabel);
      
    })
  }
  hideAndShow() {
    console.log("calling hide")
    this.isLable = !this.isLable

  }
  show() {
    this.isDelete = !this.isDelete
  }

  close() {
    this.dialogRef.close();

  }
}
