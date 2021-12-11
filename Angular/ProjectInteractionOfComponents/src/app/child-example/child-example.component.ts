import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-example',
  templateUrl: './child-example.component.html',
  styleUrls: ['./child-example.component.scss']
})
export class ChildExampleComponent  {
  @Input('title') title: any;
  @Output() dataChanged: EventEmitter<any> = new EventEmitter<any>();

  label = 'Send message';
  constructor() { }

  sendMessage() {
    this.dataChanged.emit({msg: 'Message from ChildExample'},);
  }

}
