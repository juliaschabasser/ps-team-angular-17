import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungsclearingSchritt1Component } from './leistungsclearing-schritt-1.component';

describe('LeistungsclearingSchritt1Component', () => {
  let component: LeistungsclearingSchritt1Component;
  let fixture: ComponentFixture<LeistungsclearingSchritt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeistungsclearingSchritt1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeistungsclearingSchritt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
