import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExamplePanelComponent } from './example-panel/example-panel.component';
import { ExamplePanel2Component } from './example-panel2/example-panel2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExamplePanelComponent,
    ExamplePanel2Component
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
