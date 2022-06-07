import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/services/Data/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  note: any
  FilterMsg:string=""
  @Input() NoteArray: any
  @Output() refreshEvent = new EventEmitter<any>();



  constructor(public dialog: MatDialog, private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => 
      this.FilterMsg = message)
  }
 
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '400px',
      data: note,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  receivedMessage(event: any) {
    console.log(event);
    this.refreshEvent.emit("hello")
  }
}