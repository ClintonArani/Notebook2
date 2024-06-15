import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Note } from '../interfaces/note.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: Note[] = [];
  successMessage: string = '';

  constructor(private noteService: NoteService, private router: Router) {}

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

  goToCreateNote(): void {
    this.router.navigate(['/create']);
  }

  deleteNote(id: number): void {
    if (confirm('Do you really want to delete this note?')) {
      this.noteService.deleteNote(id);
      this.notes = this.noteService.getNotes(); // Refresh the notes list
      this.successMessage = 'Note deleted successfully!';
      setTimeout(() => {
        this.successMessage = '';
      }, 2000);
    }
  }

  goToUpdateNote(note: Note): void {
    this.router.navigate(['/create'], { state: { note } });
  }
}
