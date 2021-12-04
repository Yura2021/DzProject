import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']

})
export class ContactsItemComponent implements OnInit {
  contactPerson = 'Peter';
  constructor() { }
  @Output() saveContactPerson = new EventEmitter<String>()
  ngOnInit(): void {
  }
  showContactPerson(): void {
    this.saveContactPerson.emit(this.contactPerson)
  }
}
