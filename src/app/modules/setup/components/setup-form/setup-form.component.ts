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

    return output;
  }

  submitForm(): void {
    const valid = this.validate();

    if (valid) {
      this.formSubmit.emit();
    }
  }

}
