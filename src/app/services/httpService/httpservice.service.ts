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
    return this.httpClient.post(this.baseurl + Url, reqdata, token && httpOptions)
  }
}

