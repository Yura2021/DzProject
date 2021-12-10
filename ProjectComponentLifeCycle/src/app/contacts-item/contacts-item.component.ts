import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent implements OnInit {

  constructor() { }
  @Input('name') public name: any;
  ngOnInit(): void {
    console.log('OnInit');
  }

}
