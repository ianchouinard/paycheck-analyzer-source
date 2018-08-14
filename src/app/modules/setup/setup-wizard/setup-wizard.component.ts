import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
  }

  newBillEvent(bill) {
    this.bills.push(bill);
  }

  removeBillEvent(index) {
    this.bills.splice(index, 1);
  }

  submitForm(): void {
    // this.validate();
    const freqency = (this.settings.biWeekly ? 'biweekly' : 'weekly');

    this.setupService.setInfo(
      this.settings.lastPayDate,
      freqency,
      this.settings.grossPayPerCheck,
      this.bills
    );

    this.setupService.calculateInfo();
    const data = this.setupService.getInfo();
    this.dataStore.setData(data);
    this.router.navigateByUrl('/dashboard');
    console.log(data);
  }

  /*
  validate() {

  }
  */
  ngOnInit() {
    // this.setupService.setInfo(new Date(), 'biweekly', 2200);
    // this.setupService.calculateInfo();
    // const data = this.setupService.getInfo();
    // console.log(data);
  }

}
