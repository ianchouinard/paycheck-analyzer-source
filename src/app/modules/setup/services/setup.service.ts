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
      this.months = [];
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
      case 'weekly':
        daysPerCheck = 7;
        break;

      case 'biweekly':
        daysPerCheck = 14;
        break;

      case 'triweekly':
        daysPerCheck = 21;
        break;

      case 'quadweekly':
        daysPerCheck = 28;
        break;

      case 'monthly':
        daysPerCheck = 0;
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
    if (typeof lastCheck === 'string') {
      lastCheck = new Date(lastCheck);
    }

    const output = <payMonth>{};
    let trackedDate = lastCheck;

    // payPeriod is monthly, set it to the number
    // of days in this month.
    if (payPeriod < 1) {
      payPeriod = new Date(
        lastCheck.getFullYear(), lastCheck.getMonth(), 0
      ).getDate();
    }

    output.payDates = [this.getPayPeriodInfo(lastCheck, payPeriod, pay)];
    output.month = lastCheck.getMonth();
    output.grossPay = pay;
    output.checkQuantity = 1;

    let calendar;

    // Get all paychecks before the current one
    while (trackedDate.getMonth() == output.month) {
      calendar = new Date(trackedDate);
      calendar.setDate(calendar.getDate() - payPeriod);
      trackedDate = calendar;

      if (trackedDate.getMonth() == output.month) {
        output.grossPay += pay;
        output.checkQuantity += 1;
        output.payDates.unshift(this.getPayPeriodInfo(trackedDate, payPeriod, pay));
      }
    }

    trackedDate = lastCheck;
    while (trackedDate.getMonth() == output.month) {
      calendar = new Date(trackedDate);
      calendar.setDate(calendar.getDate() + payPeriod);
      trackedDate = calendar;

      if (trackedDate.getMonth() == output.month) {
        output.grossPay += pay;
        output.checkQuantity += 1;
        output.payDates.push(this.getPayPeriodInfo(trackedDate, payPeriod, pay));
      }
    }

    output.firstCheckDateInNextMonth = trackedDate;
    return output;
  }

  /**
   * Determines which bills fall within a given pay period
   */
  private getPayPeriodInfo(payDate: Date, period: number, pay: number): payPeriod {

    if (typeof payDate === 'string') {
      payDate = new Date(payDate);
    }

    const output = <payPeriod>{};
    output.bills = [];
    output.date = payDate;
    output.totalBillCost = 0;
    output.estimatedSavings = 0;

    const calendar = new Date(payDate);
    calendar.setDate(calendar.getDate() + period);
    const endOfPeriod = calendar;

    const payMonth = payDate.getMonth();
    const payYear = payDate.getFullYear();

    // Set times to 0 to not interfere with logic
    payDate.setHours(0, 0, 0, 0);
    endOfPeriod.setHours(0, 0, 0, 0);

    let billDate;
    let formattedBillDate;
    let nextMonth;

    let bill;
    for (bill of this.bills) {
      billDate = new Date(bill.due);
      formattedBillDate = new Date(`${payMonth + 1}/${billDate.getDate()}/${payYear}`);
      formattedBillDate.setHours(0, 0, 0, 0);

      // The bill due date falls in this payperiod
      if (formattedBillDate >= payDate && formattedBillDate < endOfPeriod) {
        output.bills.push(bill);
        output.totalBillCost += bill.cost;
        continue;
      }

      // Because the pay period can carry over to the next month
      // We need to do this additional check to see if the bill is valid.
      // To do this we need to check if the end of the pay period is in next month.
      // Then check if the bill due date falls before it.
      nextMonth = payMonth + 1;
      if (nextMonth == 12) {
        // If it's the end of the year, set the next month to dec;
        nextMonth = 0;
      }

      formattedBillDate.setMonth(endOfPeriod.getMonth());

      if ((endOfPeriod.getMonth() == nextMonth) && (formattedBillDate < endOfPeriod)) {
        output.bills.push(bill);
        output.totalBillCost += bill.cost;
      }
    }

    output.estimatedSavings = pay - output.totalBillCost;

    return output;
  }

}
