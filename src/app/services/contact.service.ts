import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Contact } from '../models/Contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactsUrl: string = 'http://localhost:3000/contacts';
  contactsLimit = '?_limit=10';

  constructor(private http: HttpClient) {}
  // Get Contacts
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.contactsUrl}${this.contactsLimit}`);
  }
  // Delete Contacts
  deleteContact(contact: Contact): Observable<Contact> {
    const url = `${this.contactsUrl}/${contact.id}`;
    return this.http.delete<Contact>(url, httpOptions);
  }
  // Add Contact
  addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.contactsUrl, contact, httpOptions);
  }
}
