import { Component, Input } from '@angular/core';
import { payMonth } from '../../../setup/models/payMonth.model';

@Component({
  selector: 'pc-paychecks-chart',
  templateUrl: './paychecks-chart.component.html',
  styleUrls: ['./paychecks-chart.component.scss']
})
export class PaychecksChartComponent {

  @Input() props: Array<payMonth>;

  constructor() { }

  checkHeight(cost: number, pay: number): number {
    return (cost / pay) * 100;
  }

  checkAmount(gross: number, amountOfChecks): number {
    return gross / amountOfChecks;
  }

  barColor(bills, gross): string {
    let output;
    let cost = 0;

    for (let bill of bills) {
      cost += bill.cost;
    }

    const fraction = cost / gross;

    if (fraction < .5) {
      output = '#08da78';
    } else if (fraction < .65) {
      output = '#ffee00';
    } else if (fraction < .9) {
      output = '#ff7300';
    } else {
      output = '#ff4800';
    }

    return output;
  }

}
