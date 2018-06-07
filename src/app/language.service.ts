import { Observable, throwError } from 'rxjs';
import { Language } from './models/language.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<Language[]> {
    return this.http.get<Language[]>('/assets/i18n/languages.json');
  }
}
