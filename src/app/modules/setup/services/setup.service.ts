import { Injectable } from '@angular/core';
import { payMonth } from '../models/payMonth.model';
import { bill } from '../models/bill.model';
import { payPeriod } from '../models/payPeriod.model';

@Injectable()
export class SetupService {

  private lastPayCheck: Date;
  private payFrequency: string;
  private amountPerPaycheck: number;
  private months: Array<payMonth> = [];
  private bills: Array<bill> = [];

  constructor() { }

  public setInfo(
    lastPayCheck: Date,
    payFrequency: string,
    amountPerPaycheck: number,
    bills: Array<bill> ): void {
      this.lastPayCheck = lastPayCheck;
      this.payFrequency = payFrequency;
      this.amountPerPaycheck = amountPerPaycheck;
      this.bills = bills;
  }

  public getInfo(): Array<payMonth> {
    return this.months;
  }

  public calculateInfo() {
    let daysPerCheck: number;

    switch (this.payFrequency) {
      case "weekly":
        daysPerCheck = 7;
        break;

      case "biweekly":
        daysPerCheck = 14;
        break;

      default:
        daysPerCheck = 7;
    }

    let firstOfNextMonth = this.lastPayCheck;

    for (let i = 0; i < 12; i++) {
      this.months.push(
        this.figureMonth(firstOfNextMonth, daysPerCheck, this.amountPerPaycheck)
      );

      firstOfNextMonth = this.months[i].firstCheckDateInNextMonth;
    }
  }

  private figureMonth(lastCheck: Date, payPeriod: number, pay: number): payMonth {
    const output = <payMonth>{};
    let trackedDate = lastCheck;

    output.payDates = [this.getPayPeriodInfo(lastCheck, payPeriod)];
    output.month = lastCheck.getMonth();
    output.grossPay = pay;
    output.checkQuantity = 1;

    let calendar;

    while (trackedDate.getMonth() == output.month) {
      calendar = new Date(trackedDate);
      calendar.setDate(calendar.getDate() + payPeriod);
      trackedDate = calendar;

      if (trackedDate.getMonth() == output.month) {
        output.grossPay += pay;
        output.checkQuantity += 1;
        output.payDates.push(this.getPayPeriodInfo(trackedDate, payPeriod));
      }
    }

    output.firstCheckDateInNextMonth = trackedDate;

    // Get all paychecks before the current one
    trackedDate = lastCheck;

    while (trackedDate.getMonth() == output.month) {
      calendar = new Date(trackedDate);
      calendar.setDate(calendar.getDate() - payPeriod);
      trackedDate = calendar;

      if (trackedDate.getMonth() == output.month) {
        output.grossPay += pay;
        output.checkQuantity += 1;
        output.payDates.push(this.getPayPeriodInfo(trackedDate, payPeriod));
      }
    }

    return output;
  }

  private getPayPeriodInfo(payDate: Date, period: number): payPeriod {
    const output = <payPeriod>{};
    output.bills = [];
    output.date = payDate;
    
    let calendar = new Date(payDate);
    calendar.setDate(calendar.getDate() + period);
    let endOfPeriod = calendar;

    const payMonth = payDate.getMonth();
    const payYear = payDate.getFullYear();

    let billDate;
    let formattedBillDate
    for (let bill of this.bills) {
      billDate = new Date(bill.due);
      formattedBillDate = new Date(`${payMonth + 1}/${billDate.getDate()}/${payYear}`);
      if (formattedBillDate >= payDate && formattedBillDate < endOfPeriod) {
        output.bills.push(bill);
      }
    }

    return output;
  }

}
