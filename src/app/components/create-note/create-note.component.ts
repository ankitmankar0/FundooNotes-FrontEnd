import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createnoteForm!: FormGroup;

  title: any;
  description: any;
  isShow = false;
  constructor(private noteService: NoteService, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {

  }

  OnSubmit(){
    
  }
  show() {
    this.isShow = true
  }
  close() {
    this.isShow = false;
  }
}

