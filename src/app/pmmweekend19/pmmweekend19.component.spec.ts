import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pmmweekend19Component } from './pmmweekend19.component';

describe('Pmmweekend19Component', () => {
  let component: Pmmweekend19Component;
  let fixture: ComponentFixture<Pmmweekend19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pmmweekend19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pmmweekend19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
