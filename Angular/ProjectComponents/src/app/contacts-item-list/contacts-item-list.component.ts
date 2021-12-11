import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-item-list',
  templateUrl: './contacts-item-list.component.html',
  styleUrls: ['./contacts-item-list.component.scss']
})
export class ContactsItemListComponent implements OnInit {
  public _name = "";
  @Input() set name(value: any) {
    this._name = value + '*';
  }
  get name(): string {
    return this._name || 'Unknown';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
