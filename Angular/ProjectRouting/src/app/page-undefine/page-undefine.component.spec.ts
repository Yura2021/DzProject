import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUndefineComponent } from './page-undefine.component';

describe('PageUndefineComponent', () => {
  let component: PageUndefineComponent;
  let fixture: ComponentFixture<PageUndefineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUndefineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUndefineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
