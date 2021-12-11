import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'World'
  title = 'ProjectTemplates';
  homePageUrl="http....";
  isRed =true;
  isHalf = true;
  classes={myclass:true}
  printGreeting(): string {
    return 'Hello,' + this.name
  }
}
