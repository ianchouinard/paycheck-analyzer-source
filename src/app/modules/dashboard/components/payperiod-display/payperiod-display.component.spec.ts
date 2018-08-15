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

  it('should have dateMonth() returna valid date month number', () => {
    const testDate = new Date();
    const control = testDate.getMonth() + 1;

    const test = component.dateMonth(testDate);

    expect(test).toEqual(control);
  });

  it('should have dateDay() returna valid date day number', () => {
    const testDate = new Date();
    const control = testDate.getDate();

    const test = component.dateDay(testDate);

    expect(test).toEqual(control);
  });
});
