import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteForm!: FormGroup;
  submitted = false;
  isShow = false;

  @Output() messageEvent = new EventEmitter<string>();
  constructor(private formBuilder: FormBuilder,private note: NoteService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.createnoteForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],

    });
  }

  OnSubmit() {
    this.isShow = false;
    this.submitted = true;
    console.log("api calling")
    
    if (this.createnoteForm.valid) {
      let reqData = {
        title: this.createnoteForm.value.title,
        description: this.createnoteForm.value.description,
        bgColour:"orange"
      }
      this.note.createNote(reqData).subscribe((response: any) => {
        console.log(response)
        this.messageEvent.emit("hello")
        
        this.snackBar.open('Note added successfully', '', {
          duration:2000,
         }); 
      })
    }
  }
  show() {
    this.isShow = true
  }
}

