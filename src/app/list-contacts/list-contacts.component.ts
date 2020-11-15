import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CONTACTS } from 'Mock-Contacts';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss'],
})
export class ListContactsComponent implements OnInit {
  public contacts: Contact[] = [];

  constructor(
    private router: Router,
    private contactsService: ContactsService
  ) {
    this.updateComponent();
  }

  ngOnInit(): void {}

  public addContact(): void {
    this.router.navigate(['/contacts/create']);
  }

  public deleteContact(contactId: string): void {
    this.contactsService.deleteContact(contactId);
    this.updateComponent();
  }

  public editContact(contactId): void {
    this.router.navigate([`/contacts/${contactId}`]);
  }

  public updateComponent(): void {
    console.log(this.contactsService.getContacts());
    this.contacts = this.contactsService.getContacts();
  }
}
