import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
/*   template: `
    <contacts-item [(name)]="contactPerson"></contacts-item>
    <p>{{ contactPerson }}</p>
  `, */
})
export class ContactsComponent implements OnInit {
  public contactPerson= "undefined";

  constructor() { }

  ngOnInit(): void {
  }

}
