import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

import { Contact } from '../../models/Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
  // Delete Contact
  deleteContact(contact: Contact) {
    // Removing From the UI
    this.contacts = this.contacts.filter((c) => c.id !== contact.id);
    // Removing from the json server and go to contact.service.ts
    this.contactService.deleteContact(contact).subscribe();
  }
  // Add Contact
  addContact(contact: Contact) {
    this.contactService.addContact(contact).subscribe((contact) => {
      this.contacts.push(contact);
    });
  }
}
