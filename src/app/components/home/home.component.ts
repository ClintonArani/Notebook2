import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  notes: { title: string; content: string; date: string }[] = [];

  constructor(private noteService: NoteService, private router: Router) { 
    this.notes = this.noteService.getNotes()
  }

  goToCreateNote(): void {
    this.router.navigate(['/notebook']);
  }
}

