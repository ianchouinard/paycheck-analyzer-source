import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SetupService } from '../services/setup.service';
import { setupForm } from '../models/setupForm.model';
import { bill } from '../models/bill.model';
import { DatastoreService } from '../../../services/datastore.service';

@Component({
  selector: 'pc-setup-wizard',
  templateUrl: './setup-wizard.component.html',
  styleUrls: ['./setup-wizard.component.scss']
})
export class SetupWizardComponent implements OnInit {

  public settings: setupForm;
  public bills: Array<bill> = [];

  constructor(
    private setupService: SetupService,
    private dataStore: DatastoreService,
    private router: Router
  ) {
    this.settings = <setupForm>{};
    this.settings.lastPayDate = new Date();
    this.settings.grossPayPerCheck = 50;
    this.settings.expenses = [];
    this.settings.frequencies = [
      {
        title: 'Weekly',
        value: 'weekly'
      },
      {
        title: 'Every two weeks',
        value: 'biweekly'
      },
      {
        title: 'Every three weeks',
        value: 'triweekly'
      },
      {
        title: 'Every four weeks',
        value: 'quadweekly'
      },
      {
        title: 'Monthly',
        value: 'monthly'
      }
    ];
  }

  newBillEvent(bill): void {
    this.bills.push(bill);
  }

  removeBillEvent(index): void {
    this.bills.splice(index, 1);
  }

  submitForm(): void {
    this.setupService.setInfo(
      this.settings.lastPayDate,
      this.settings.frequency,
      this.settings.grossPayPerCheck,
      this.bills
    );

    this.setupService.calculateInfo();
    const data = this.setupService.getInfo();
    this.dataStore.setData(data);

    this.dataStore.settings = this.settings;
    this.dataStore.billsData = this.bills;

    localStorage.setItem('paychecksdata', JSON.stringify(data));
    localStorage.setItem('formdata', JSON.stringify(this.settings));
    localStorage.setItem('bills', JSON.stringify(this.bills));

    this.router.navigateByUrl('/dashboard');
  }

  checkStorageForData(): void {
    const payChecksData = localStorage.getItem('paychecksdata');
    const formData = localStorage.getItem('formdata');
    const billsData = localStorage.getItem('bills');

    if (payChecksData) {
      const checksResponse = JSON.parse(payChecksData);
      const checksDataValid = this.dataStore.validateLocalStorageCheckData(checksResponse);

      if (checksDataValid) {
        this.dataStore.data = checksResponse;
      }
    }

    if (formData) {
      const formResponse = JSON.parse(formData);
      const formDataValid = this.dataStore.validateLocalStorageFormData(formResponse);

      if (formDataValid) {
        this.settings = formResponse;
      }
    }

    if (billsData) {
      const billsResponse = JSON.parse(billsData);
      const billsDataValid = this.dataStore.validateLocalStorageBillData(billsResponse);

      if (billsDataValid) {
        this.bills = billsResponse;
      }
    }
  }

  checkStoreForData(): void {
    const formData = this.dataStore.settings;
    const billsData = this.dataStore.billsData;

    if (formData) {
      this.settings = formData;
    }

    if (billsData) {
      this.bills = billsData;
    }
  }

  ngOnInit() {
    if (this.dataStore.data && this.dataStore.data.length > 0) {
      this.checkStoreForData();
    } else {
      this.checkStorageForData();
    }
  }

}
