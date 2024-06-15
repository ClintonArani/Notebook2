import { Injectable } from '@angular/core';
import { Note } from './interfaces/note.interface';


@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private localStorageKey = 'notes';
  private notes: Note[] = [];

  constructor() {
    this.loadNotes();
  }

  private loadNotes(): void {
    const savedNotes = localStorage.getItem(this.localStorageKey);
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
  }

  private saveNotes(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.notes));
  }

  addNote(note: Note): void {
    note.id = this.notes.length ? this.notes[this.notes.length - 1].id + 1 : 1;
    this.notes.push(note);
    this.saveNotes();
  }

  getNotes(): Note[] {
    return this.notes;
  }

  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex(note => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.saveNotes();
    }
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(note => note.id !== id);
    this.saveNotes();
  }
}
