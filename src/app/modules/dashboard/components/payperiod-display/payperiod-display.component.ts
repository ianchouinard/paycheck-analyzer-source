import { Component, OnInit, Input } from '@angular/core';
import { payPeriod } from '../../../setup/models/payPeriod.model';

@Component({
  selector: 'pc-payperiod-display',
  templateUrl: './payperiod-display.component.html',
  styleUrls: ['./payperiod-display.component.scss']
})
export class PayperiodDisplayComponent implements OnInit {

  @Input() props: payPeriod;

  constructor() { }

  ngOnInit() {
  }

}
