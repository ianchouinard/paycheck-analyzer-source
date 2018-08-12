import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayperiodDisplayComponent } from './payperiod-display.component';

describe('PayperiodDisplayComponent', () => {
  let component: PayperiodDisplayComponent;
  let fixture: ComponentFixture<PayperiodDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayperiodDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayperiodDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
