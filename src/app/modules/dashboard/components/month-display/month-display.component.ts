import { Component, OnInit, Input } from '@angular/core';
import { payMonth } from '../../../setup/models/payMonth.model';

@Component({
  selector: 'pc-month-display',
  templateUrl: './month-display.component.html',
  styleUrls: ['./month-display.component.scss']
})
export class MonthDisplayComponent implements OnInit {

  @Input() props: payMonth;

  constructor() { }

  ngOnInit() {
  }

}
