import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-administer-contacts',
  templateUrl: './administer-contacts.component.html',
  styleUrls: ['./administer-contacts.component.scss'],
})
export class AdministerContactsComponent implements OnInit {
  public isNewContact: boolean;
  public contact: Contact;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    let contactId = this.route.snapshot.params.id;
    this.isNewContact = contactId === 'create';

    if (this.isNewContact) {
      this.contact = new Contact(
        this.contactsService.getNextId(),
        '',
        '',
        '',
        ''
      );
    } else {
      contactId = parseInt(contactId, 10);
      this.contact = this.contactsService.getContact(contactId);
    }
  }

  public saveContact(): void {
    this.contactsService.save(this.contact, this.isNewContact);
    this.router.navigate(['']);
  }

  public navigateBack(): void {
    this.router.navigate(['']);
  }
}
