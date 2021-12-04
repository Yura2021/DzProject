import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProjectEvenHandling';
  showContacts(event:any): void {
    console.log(event.target);
    console.log(event.target.value); //в данном случае undefined
    console.log(event.keyCode);//в данном случае undefined
  }
  showContacts2(){
    console.log("showContacts()")
  }
  catchCustomEvent(ev:any): void {
    console.log(ev)
  }
}
