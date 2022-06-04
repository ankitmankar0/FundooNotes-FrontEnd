import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  noteList: any
  
  constructor(private note: NoteService) { }


  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getallNote().subscribe((response: any) => {
      console.log(response.data);
      this.noteList = response.data;
      this.noteList = this.noteList.filter((obj: any) => {
        return obj.isArchieve===true
      })

    })
    console.log("call api");
  }

  receiveMessage(event: any) {
    this.getAllNote();
  }
}
