import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';
import { HooksExampleComponent } from './hooks-example/hooks-example.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsItemComponent,
    HooksExampleComponent,
    ContactsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
