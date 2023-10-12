import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactPayload, Contacts } from '@capacitor-community/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  public id: string = '';
  contact: ContactPayload = {
    contactId: '',
  };
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id') || '';
    this.loadContact();
  }
  async loadContact() {
    const result = await Contacts.getContact({
      contactId: this.id,
      projection: {
        name: true,
        phones: true,
        emails: true,
        organization: true,
        image: true,

        // birthday: true,
        // note: true,
        // postalAddresses: true,
      },
    });
    this.contact = result.contact;
  }
}
