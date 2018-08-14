import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pc-paychecks-chart',
  templateUrl: './paychecks-chart.component.html',
  styleUrls: ['./paychecks-chart.component.scss']
})
export class PaychecksChartComponent implements OnInit {

  @Input() props: any;

  constructor() { }

  checkHeight(cost: number, pay: number) {
    return (cost / pay) * 100;
  }

  barColor(bills, gross) {
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

  ngOnInit() {
  }

}