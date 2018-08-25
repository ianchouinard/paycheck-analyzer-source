import { Injectable } from '@angular/core';
import { payMonth } from '../modules/setup/models/payMonth.model';
import { setupForm } from '../modules/setup/models/setupForm.model';
import { bill } from '../modules/setup/models/bill.model';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  public data: Array<payMonth> = [];
  public settings: setupForm;
  public billsData: Array<bill>;

  constructor() { }

  setData(data: Array<payMonth>): void {
    this.data = data;
  }

  getData(): Array<payMonth> {
    return this.data;
  }

  validateLocalStorageFormData(response: any): boolean {
    const res: setupForm = response;

    if (!res.lastPayDate) {
      return false;
    }

    if (!res.grossPayPerCheck) {
      return false;
    }

    if (!res.frequencies) {
      return false;
    }

    if (!res.frequency) {
      return  false;
    }

    return true;
  }

  validateLocalStorageBillData(response: any): boolean {
    const res: Array<bill> = response;
    let output = true;

    res.forEach((bill) => {
      if (!bill.cost || !bill.due || !bill.name) {
        output = false;
      }
    });

    return output;
  }

  validateLocalStorageCheckData(response: any): boolean {
    const res: Array<payMonth> = response;
    let output = true;

    res.forEach((month) => {
      if (
        !month.checkQuantity
        || !month.firstCheckDateInNextMonth
        || !month.grossPay
        || !month.payDates
      ) {
        output = false;
      }
    });

    return output;
  }

}
