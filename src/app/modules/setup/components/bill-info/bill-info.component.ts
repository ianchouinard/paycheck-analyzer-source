import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bill } from '../../models/bill.model';

@Component({
  selector: 'pc-bill-info',
  templateUrl: './bill-info.component.html',
  styleUrls: ['./bill-info.component.scss']
})
export class BillInfoComponent implements OnInit {

  @Input() type: string;
  @Input() bill: bill;
  @Input() index: number;
  @Output() billUpdate: EventEmitter<bill> = new EventEmitter<bill>();
  @Output() billRemove: EventEmitter<number> = new EventEmitter<number>();
  public nameError: boolean;
  public costError: boolean;
  public dateError: boolean;
 
  constructor() { }

  addNewBill(): void {
    const valid = this.validate();

    if (!valid) {
      return;
    }

    const output = JSON.parse(JSON.stringify(this.bill));
    this.billUpdate.emit(output);
    this.bill = <bill>{};
  }

  removeBill(): void {
    this.billRemove.emit(this.index);
  }

  validate() {
    let output = true;
    this.resetValidation();

    if (!this.bill.name || this.bill.name == '') {
      output = false;
      this.nameError = true;
    }

    if (!this.bill.cost || (typeof this.bill.cost != 'number')) {
      output = false;
      this.costError = true;
    }

    if (!this.bill.due) {
      output = false;
      this.dateError = true;
    }

    return output;
  }

  resetValidation(): void {
    this.nameError = false;
    this.costError = false;
    this.dateError = false;
  }

  ngOnInit() {
    if (this.type == 'add') {
      this.bill = <bill>{};
    }
  }

}
