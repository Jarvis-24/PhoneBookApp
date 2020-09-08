import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactUrl: string = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactUrl);
  }
}
