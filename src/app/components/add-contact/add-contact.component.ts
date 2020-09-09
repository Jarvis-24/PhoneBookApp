import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  @Output() addContact: EventEmitter<any> = new EventEmitter();

  name: string;
  contact: number;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const contact = {
      name: this.name,
      contact: this.contact,
      deleted: false,
    };
    this.addContact.emit(contact);
  }
}
