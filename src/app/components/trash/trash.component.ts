import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  noteList: any
  constructor(private note: NoteService) { }


  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote() {
    this.note.getallNote().subscribe((response: any) => {
      console.log(response);
      this.noteList = response.data;
      this.noteList = this.noteList.filter((obj: any) => {
        return obj.isTrash === true
      })

    })
    console.log("call api");
  }

  receiveMessage(event: any) {
    this.getAllNote();
  }
}
