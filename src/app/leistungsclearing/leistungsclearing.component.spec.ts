import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeistungsclearingComponent } from './leistungsclearing.component';

describe('LeistungsclearingComponent', () => {
  let component: LeistungsclearingComponent;
  let fixture: ComponentFixture<LeistungsclearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeistungsclearingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeistungsclearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
