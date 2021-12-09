import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplePanelComponent } from './example-panel/example-panel.component';
import { ExamplePanel2Component } from './example-panel2/example-panel2.component';
import { ExamplePanel3Component } from './example-panel3/example-panel3.component';
import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePanelComponent,
    ExamplePanel2Component,
    ExamplePanel3Component,
    OpenCloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
