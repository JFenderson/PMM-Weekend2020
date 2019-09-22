import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dirty30Component } from './dirty30.component';

describe('Dirty30Component', () => {
  let component: Dirty30Component;
  let fixture: ComponentFixture<Dirty30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dirty30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dirty30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
