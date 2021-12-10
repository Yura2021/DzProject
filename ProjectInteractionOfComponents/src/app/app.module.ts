import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentExampleComponent } from './parent-example/parent-example.component';
import { ChildExampleComponent } from './child-example/child-example.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SomeDataService } from './some-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentExampleComponent,
    ChildExampleComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SomeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
