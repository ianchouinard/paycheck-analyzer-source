import { Component, Input } from '@angular/core';
import { payMonth } from '../../../setup/models/payMonth.model';

@Component({
  selector: 'pc-month-display',
  templateUrl: './month-display.component.html',
  styleUrls: ['./month-display.component.scss']
})
export class MonthDisplayComponent {

  @Input() props: payMonth;

  constructor() { }

}
