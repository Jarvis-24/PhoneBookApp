import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/app/models/Contact';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  @Output() deleteContact: EventEmitter<Contact> = new EventEmitter();

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  //onDelete
  onDelete(contact) {
    this.deleteContact.emit(contact);
  }
}
