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

}
