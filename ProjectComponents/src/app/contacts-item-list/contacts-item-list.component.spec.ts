import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsItemListComponent } from './contacts-item-list.component';

describe('ContactsItemListComponent', () => {
  let component: ContactsItemListComponent;
  let fixture: ComponentFixture<ContactsItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
