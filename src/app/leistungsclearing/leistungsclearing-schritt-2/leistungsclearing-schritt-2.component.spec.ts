import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungsclearingSchritt2Component } from './leistungsclearing-schritt-2.component';

describe('LeistungsclearingSchritt2Component', () => {
  let component: LeistungsclearingSchritt2Component;
  let fixture: ComponentFixture<LeistungsclearingSchritt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeistungsclearingSchritt2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeistungsclearingSchritt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
