import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpserviceService) { }

  registration(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/register', reqdata, false, header)
  }

  login(reqdata: any) {
    console.log(reqdata)
    let header = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService(`User/login/${reqdata.email}/${reqdata.password}`, reqdata, false, header)
  }

  forgetpassword(reqdata: any) {
    console.log(reqdata)
    let header = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    //return this.httpService.postService('User/ForgotPassword', reqdata, false, header)
    return this.httpService.postService(`User/ForgotPassword/${reqdata.email}`, reqdata, false, header)
  }
}

