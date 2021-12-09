import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplePanel3Component } from './example-panel3.component';

describe('ExamplePanel3Component', () => {
  let component: ExamplePanel3Component;
  let fixture: ComponentFixture<ExamplePanel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplePanel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePanel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
