import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpservice: HttpserviceService) {
    this.token = localStorage.getItem('token')
  }

  createNote(reqdata: any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Note/AddNote', reqdata, true, headerOption);
  }

  getallNote(){
    console.log();
    let headerOption = {
      headers: new  HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('Note/GetAllNotes', true, headerOption);
  }
}
