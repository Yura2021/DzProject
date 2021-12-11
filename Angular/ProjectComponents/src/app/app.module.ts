import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';
import { FormsModule } from '@angular/forms';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsItemListComponent } from './contacts-item-list/contacts-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactsItemComponent,
    ContactsListComponent,
    ContactsItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
