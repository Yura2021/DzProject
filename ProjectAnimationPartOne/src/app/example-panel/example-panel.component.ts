import { Component, OnInit,NgModule } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-example-panel',
  templateUrl: './example-panel.component.html',
  styleUrls: ['./example-panel.component.scss'],
  animations: [
    trigger('expandedPanel', [
      state('initial', style({ height: 0 })),
      state('expanded', style({ height: '*' })),
      transition('initial <=> expanded', animate('0.3s')),
    ]),
  ],
})
export class ExamplePanelComponent implements OnInit {
  isExpanded: boolean = false
  state: string = 'initial'
  constructor() { }
  expand() {
    this.isExpanded = !this.isExpanded
    this.state = this.isExpanded ? 'expanded' : 'initial'
  }
  ngOnInit(): void {
  }

}
