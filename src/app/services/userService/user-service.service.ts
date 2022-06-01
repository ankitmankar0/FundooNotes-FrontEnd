import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  token:any; 

  constructor(private httpService: HttpserviceService) { 
    this.token=localStorage.getItem("token")
  }

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

  resetpassword(reqdata: any, token: any) {
    console.log(reqdata)
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token
      })
    }
    return this.httpService.putService('User/ResetPassword', reqdata, true, headerOption)
  }
}

