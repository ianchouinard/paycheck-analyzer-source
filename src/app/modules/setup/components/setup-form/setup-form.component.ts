import { Component, Input, Output, EventEmitter } from '@angular/core';
import { setupForm } from '../../models/setupForm.model';

@Component({
  selector: 'pc-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.scss']
})
export class SetupFormComponent {

  @Input() model: setupForm;
  @Output() formSubmit: EventEmitter<void> = new EventEmitter<void>();
  public dateError: boolean;
  public payError: boolean;
  public freqError: boolean;

  constructor() {}

  validate(): boolean {
    let output = true;

    if (!this.model.grossPayPerCheck || (typeof this.model.grossPayPerCheck != 'number')) {
      output = false;
      this.payError = true;
    }

    if (!this.model.lastPayDate) {
      output = false;
      this.dateError = true;
    }

    if (!this.model.frequency || this.model.frequency === '') {
      output = false;
      this.freqError = true;
    }

    return output;
  }

  clearValidators(): void {
    this.dateError = false;
    this.payError = false;
    this.freqError = false;
  }

  submitForm(): void {
    this.clearValidators();
    const valid = this.validate();

    if (valid) {
      this.formSubmit.emit();
    }
  }

}
