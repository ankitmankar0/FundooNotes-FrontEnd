import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  baseurl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
  postService(Url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(this.baseurl + Url, reqdata, token && httpOptions);
  }

  putService(Url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.put(this.baseurl + Url, reqdata, token && httpOptions);
  }

  getService(Url: string,token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.get(this.baseurl + Url, token && httpOptions);
  }
  // putService(url: string, reqData: any, token: boolean = false, headers: any) {
  //   console.log(reqData)
  //   return this.httpClient.put(this.baseurl+url, reqData, token && headers)
  // }
}

