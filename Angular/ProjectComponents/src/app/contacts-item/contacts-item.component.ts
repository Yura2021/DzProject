import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss'],
})
export class ContactsItemComponent implements OnInit {
  @Input('name') public name: any;
  @Output() public saveContactPerson = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  showContactPerson(value: any) {
    this.name = value;
    this.saveContactPerson.emit(this.name);
  }
}
