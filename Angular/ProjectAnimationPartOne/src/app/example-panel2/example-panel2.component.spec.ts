import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePanel2Component } from './example-panel2.component';

describe('ExamplePanel2Component', () => {
  let component: ExamplePanel2Component;
  let fixture: ComponentFixture<ExamplePanel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplePanel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePanel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
