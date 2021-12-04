import { Component, OnInit,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent implements OnInit {
  @Input() name: string = 'Unknown';
  @Output() nameChange = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }
  showContactPerson(): void {
    this.name = 'Peter';
    this.nameChange.emit(this.name);
  }
}
