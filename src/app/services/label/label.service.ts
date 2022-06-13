import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  token: any;

  constructor(private httpservice: HttpserviceService) {
    this.token = localStorage.getItem('token')
  }

  postLabel(reqdata:any) {
    console.log(reqdata);
    console.log(this.token)
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService(`Label/CreateLabel/${reqdata.labelName}`, reqdata, true, headerOption)
  }

  deleteLabel(reqdata:any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.deleteService(`Label/DeleteLabel/${reqdata.LabelId}`, true, headerOption)
  }

  getallLabel() {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Label/GetAllLabel', true, headerOption);
  }
}
