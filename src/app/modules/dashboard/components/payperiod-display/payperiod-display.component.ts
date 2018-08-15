import { Component, Input } from '@angular/core';
import { payPeriod } from '../../../setup/models/payPeriod.model';

@Component({
  selector: 'pc-payperiod-display',
  templateUrl: './payperiod-display.component.html',
  styleUrls: ['./payperiod-display.component.scss']
})
export class PayperiodDisplayComponent {

  @Input() props: payPeriod;

  constructor() { }

  dateMonth(due): number {
    const date = new Date(due);
    return date.getMonth() + 1;
  }

  dateDay(due): number {
    const date = new Date(due);
    return date.getDate();
  }

}
