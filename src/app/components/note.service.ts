import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private localStorageKey = 'notes';
  private notes: { title: string; content: string; date: string }[] = [];

  constructor() {
    this.loadNotes(); // Load notes from local storage when service initializes
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

  addNote(note: { title: string; content: string; date: string }): void {
    this.notes.push(note);
    this.saveNotes(); // Save notes to local storage after adding
  }

  getNotes(): { title: string; content: string; date: string }[] {
    return this.notes;
  }
}
