import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpService/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private httpservice:HttpserviceService) { 
    this.token=localStorage.getItem('token')
  }

  createNote(reqdata: any){
    let header = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' +this.token
      })
    }
    return this.httpservice.postService('Note/AddNote', reqdata, true, header);
  }
}
