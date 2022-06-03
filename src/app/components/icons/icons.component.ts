import { Component,EventEmitter, Input,Output, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/services/noteService/note.service';
import { TrashComponent } from '../trash/trash.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { GetAllNotesComponent } from '../get-all-notes/get-all-notes.component';
import { ArchiveComponent } from '../archive/archive.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any;
  
  @Input() notedata: any;
  @Output() refresh = new EventEmitter<string>();
  archieveMessage="refresh archieve"

  isTrashComponent = false;
  isDisplayNoteComponent=false;
  isArchieveComponent = false;

  constructor(private router: ActivatedRoute, private note:NoteService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let Compo = this.router.snapshot.component;

    if (Compo == GetAllNotesComponent) {
      this.isDisplayNoteComponent = true;
    }

    if (Compo == TrashComponent) {
      this.isTrashComponent = true;
    }
    if (Compo == ArchiveComponent) {
      this.isArchieveComponent = true;
      
    }
  }
  
  trash(note:any) {
    this.note.trashNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.refresh.emit("hello")
      this.snackBar.open('Note trashed successfully..', '', {
        duration: 2000,
      })
    })
  }

  delete() {
    this.note.deleteNote(this.notedata.noteId).subscribe((response: any) => {
      console.log("Note Deleted Successfully", response);
      this.refresh.emit("hello")
      this.snackBar.open('Note Deleted Successfully', '', {
        duration: 2000,
      })
    })
  }

  archieve() {
    this.note.archieveNote(this.notedata.noteId).subscribe((response: any) => {
      console.log(response);
      this.refresh.emit("hello")
      this.snackBar.open('Note Archived', '', {
        duration: 3000,
       
      })  
  })  
  }
}
