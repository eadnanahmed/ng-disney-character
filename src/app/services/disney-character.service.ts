import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DisneyCharacter } from '../models/disney-character';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisneyCharacterService {

  url = 'https://s3.amazonaws.com/technical-challenge/v3/contacts.json';

  private disneyCharacter = new BehaviorSubject(new DisneyCharacter());
  currentDisneyCharacter = this.disneyCharacter.asObservable();

  constructor(private http: HttpClient) { }

  changeDisneyCharacter(character: DisneyCharacter): void {
    this.disneyCharacter.next(character);
  }

  getCharacters(): Observable<DisneyCharacter[]> {
    return this.http.get<DisneyCharacter[]>(`${this.url}`);
  }
}
