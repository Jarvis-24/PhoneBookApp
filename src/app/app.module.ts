import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactItemComponent } from './components/contact-item/contact-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactItemComponent,
    HeaderComponent,
    AddContactComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
