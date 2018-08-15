import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SetupWizardComponent } from './setup-wizard.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SetupService } from '../services/setup.service';
import { DatastoreService } from '../../../services/datastore.service';
import { bill } from '../models/bill.model';
import { setupForm } from '../models/setupForm.model';

describe('SetupWizardComponent', () => {
  let component: SetupWizardComponent;
  let fixture: ComponentFixture<SetupWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ SetupWizardComponent ],
      providers: [SetupService, DatastoreService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupWizardComponent);
    component = fixture.componentInstance;
    localStorage.removeItem('formdata');
    localStorage.removeItem('bills');
    fixture.detectChanges();
  });

  const testBill = <bill>{};
  testBill.name = 'test';
  testBill.cost = 400;
  testBill.due = new Date();

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add a new bill', () => {
    component.newBillEvent(testBill);
    fixture.detectChanges();

    expect(component.bills.length).toEqual(1);
  });

  it('should be able to remove a bill', () => {
    component.bills.push(testBill);
    fixture.detectChanges();

    component.removeBillEvent(0);
    fixture.detectChanges();

    expect(component.bills.length).toEqual(0);
  });

  it('should submit the form', () => {
    component.submitForm();
    fixture.detectChanges();

    component.checkStoreForData();
    fixture.detectChanges();

    expect(component.settings).toBeTruthy();
    expect(component.bills).toBeTruthy();
  });

  it('should be able to check for locally stored data', () => {
    const bills = [];
    bills.push(testBill);

    const settings = <setupForm>{};
    settings.grossPayPerCheck = 999;

    localStorage.setItem('formdata', JSON.stringify(settings));
    localStorage.setItem('bills', JSON.stringify(bills));

    component.checkStorageForData();
    fixture.detectChanges();

    expect(component.settings.grossPayPerCheck).toEqual(999);
    expect(component.bills[0].name).toEqual('test');
  });
});
