import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-panel3',
  templateUrl: './example-panel3.component.html',
  styleUrls: ['./example-panel3.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
    ]),
  ],
})
export class ExamplePanel3Component implements OnInit {
  isOpen = false;
  constructor() { }

  ngOnInit(): void {
  }
  onAnimationEvent(event: any) // Функции, определенные для этих событий, в качестве аргумента получают объект типа AnimationEvent
  {
    // openClose is trigger name in this example
    console.warn(`Animation Trigger: ${event.triggerName}`);

    // phaseName is "start" or "done"
    console.warn(`Phase: ${event.phaseName}`);

    // in our example, totalTime is 1000 (number of milliseconds in a second)
    console.warn(`Total time: ${event.totalTime}`);

    // in our example, fromState is either "open" or "closed"
    console.warn(`From: ${event.fromState}`);

    // in our example, toState either "open" or "closed"
    console.warn(`To: ${event.toState}`);

    // the HTML element itself, the button in this case
    console.warn(`Element: ${event.element}`);
  }
  onClick() {
    this.isOpen = !this.isOpen;
  }
}
