import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-panel2',
  templateUrl: './example-panel2.component.html',
  styleUrls: ['./example-panel2.component.scss'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
      transition('* => void', [
        animate('1.2s', style({ opacity: 0 })),
      ]),
    ])
  ],
})
export class ExamplePanel2Component implements OnInit {
  isVisible=true;
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  this.isVisible=!this.isVisible;
}
}
