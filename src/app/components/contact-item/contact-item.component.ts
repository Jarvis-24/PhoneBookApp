import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css'],
})
export class ContactItemComponent implements OnInit {
  @Input() contact: Contact;
  constructor() {}

  ngOnInit(): void {}

  //onDelete
  onDelete(contact) {
    console.log('Deleted');
  }
}
