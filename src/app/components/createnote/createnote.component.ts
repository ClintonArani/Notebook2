import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-createnote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createnote.component.html',
  styleUrl: './createnote.component.css'
})
export class CreatenoteComponent {
  
  constructor(private noteService: NoteService, private router: Router) { }

  onSubmit(noteForm: any): void {
    if (noteForm.valid) {
      const newNote = {
        title: noteForm.value.title,
        content: noteForm.value.content,
        date: noteForm.value.date
      };
      this.noteService.addNote(newNote);
      console.log('New note added:', newNote); // Log the new note object
      this.router.navigate(['/']); // Navigate to home after adding the note
    }
  }
}
