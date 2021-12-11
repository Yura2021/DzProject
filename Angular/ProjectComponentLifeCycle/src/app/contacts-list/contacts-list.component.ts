import { Component,  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,Input,ViewChild,ContentChild, SimpleChanges } from '@angular/core';
import { ContactsItemComponent } from '../contacts-item/contacts-item.component';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements  OnChanges,
OnInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {
  @Input() title: any;
  constructor() { }
  company: string = 'Google Inc.'

  @ViewChild(ContactsItemComponent)
  vwCh: ContactsItemComponent | undefined
  @ContentChild(ContactsItemComponent)
  cntCh: ContactsItemComponent | undefined
  ngOnChanges(obj: SimpleChanges) {
    console.log('OnChanges', obj)
  }

  ngOnInit() {
    console.log('OnInit', this.company)
  }

  ngDoCheck() {
    console.log('DoCheck')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit', this.cntCh)
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('AfterViewInit', this.vwCh)
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }

}
