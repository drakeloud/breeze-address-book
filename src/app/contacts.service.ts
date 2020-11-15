import { Injectable } from '@angular/core';
import { CONTACTS } from 'Mock-Contacts';
import { Contact } from './models/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;
  constructor() {}

  public getContacts(): Contact[] {
    return this.contacts.sort((a, b) => a.name.localeCompare(b.name));
  }

  public getContact(contactId: number): Contact {
    return this.contacts.find((contact) => contact.id === contactId);
  }

  public save(contact: Contact, isNew: boolean): void {
    if (isNew) {
      this.contacts.push(contact);
    } else {
      const index = this.contacts.findIndex(
        (findContact) => findContact.id === contact.id
      );
      this.contacts[index] = contact;
    }
  }

  public deleteContact(contactId): void {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
  }

  public getNextId(): number {
    if (this.contacts.length === 0) {
      return 1;
    }
    const currentMaxId = Math.max(
      ...this.contacts.map((contact) => contact.id)
    );
    return currentMaxId + 1;
  }
}
