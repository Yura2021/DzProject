import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorContactsRouteComponent } from './director-contacts-route.component';

describe('DirectorContactsRouteComponent', () => {
  let component: DirectorContactsRouteComponent;
  let fixture: ComponentFixture<DirectorContactsRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectorContactsRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorContactsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
