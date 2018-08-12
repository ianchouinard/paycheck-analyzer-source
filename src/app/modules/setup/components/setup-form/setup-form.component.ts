import { Component, OnInit, Input } from '@angular/core';
import { setupForm } from '../../models/setupForm.model';

@Component({
  selector: 'pc-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.scss']
})
export class SetupFormComponent implements OnInit {

  @Input() model: setupForm;

  constructor() {}

  ngOnInit() {
  }

}
