import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { ChildExampleComponent } from '../child-example/child-example.component';

@Component({
  selector: 'app-parent-example',
  templateUrl: './parent-example.component.html',
  styleUrls: ['./parent-example.component.scss']
})
export class ParentExampleComponent implements AfterViewInit {
  @ViewChild(ChildExampleComponent) viewChild: ChildExampleComponent|any
  constructor() { }

  ngAfterViewInit() {
    console.log(this.viewChild)
  }
  dataChangeHandler(data:any) {
    console.log(data)
  }

}
