import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any
  description: any
  bgColour: any
  noteId:any
  constructor(public note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data)
    this.title = this.data.title
    this.description = this.data.description
    this.bgColour = this.data.bgColor
  }

  onNoClick(): void{
  let data = {
    title: this.title,
    description: this.description,
    bgColour:"orange"
  }
  this.note.updateNote(data,this.data.noteId).subscribe((response: any) => {
    console.log(response);
  })

}
}
