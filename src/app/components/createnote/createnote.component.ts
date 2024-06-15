import { Component } from '@angular/core';
import { NoteService } from '../note.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Note } from '../interfaces/note.interface'; // Import Note interface

@Component({
  selector: 'app-createnote',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent {
  note: Note = { id: 0, title: '', content: '', date: '' }; // Ensure note is properly initialized

  successMessage: string = '';

  constructor(private noteService: NoteService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { note: Note };
    if (state && state.note) {
      this.note = state.note;
    }
  }

  onSubmit(noteForm: any): void {
    if (noteForm.valid) {
      if (this.note.id) {
        this.noteService.updateNote(this.note);
        this.successMessage = 'Note updated successfully!';
      } else {
        this.noteService.addNote({
          id: 0,
          title: noteForm.value.title,
          content: noteForm.value.content,
          date: noteForm.value.date
        });
        this.successMessage = 'Note created successfully!';
      }
      setTimeout(() => {
        this.successMessage = '';
        this.router.navigate(['/home']);
      }, 2000);
    }
  }
}