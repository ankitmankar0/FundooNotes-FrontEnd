import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteList:any;   //array type of var

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNote()
  }
  getAllNote(){
    this.note.getallNote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
      this.noteList=this.noteList.filter((obj:any)=>{
        return obj.isArchieve===false && obj.isTrash===false
      })

    })
    console.log("call api");
  }

  receiveMessage(event:any){
    this.getAllNote();
 }
}
