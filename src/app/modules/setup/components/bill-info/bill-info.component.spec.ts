import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillInfoComponent } from './bill-info.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDatepickerModule, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MatNativeDateModule } from '@angular/material';
import { bill } from '../../models/bill.model';

describe('BillInfoComponent', () => {
  let component: BillInfoComponent;
  let fixture: ComponentFixture<BillInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, MatDatepickerModule, MatDatepickerModule, MatNativeDateModule ],
      declarations: [ BillInfoComponent ],
      providers: [MatDatepickerModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const testBill: bill = <bill>{};
  testBill.name = 'test';
  testBill.cost = 400;
  testBill.due = new Date();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should emit a new bill when added', () => {
    component.bill = testBill;
    fixture.detectChanges();

    spyOn(component.billUpdate, 'emit');

    component.addNewBill();
    fixture.detectChanges();

    expect(component.billUpdate.emit).toHaveBeenCalled();
  });

  it ('should emit a bill remove event when a bill is removed', () => {
    component.bill = testBill;
    fixture.detectChanges();

    spyOn(component.billRemove, 'emit');

    component.removeBill();
    fixture.detectChanges();

    expect(component.billRemove.emit).toHaveBeenCalled();
  });

  it('should validate the form', () => {
    component.bill = <bill>{};
    component.bill.name = '';
    component.bill.cost = null;
    component.bill.due = null;
    fixture.detectChanges();

    const valid = component.validate();
    fixture.detectChanges();

    expect(valid).toBe(false);
    expect(component.nameError).toBe(true);
    expect(component.costError).toBe(true);
    expect(component.dateError).toBe(true);
  });

  it('should be able to clear validation errors', () => {
    component.bill = <bill>{};
    component.nameError = true;
    component.costError = true;
    component.dateError = true;
    fixture.detectChanges();

    component.resetValidation();
    fixture.detectChanges();

    expect(component.nameError).toBe(false);
    expect(component.costError).toBe(false);
    expect(component.dateError).toBe(false);
  });
});
