import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupWizardComponent } from './setup-wizard/setup-wizard.component';
import { Routes, RouterModule } from '@angular/router';
import { SetupService } from './services/setup.service';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { SetupFormComponent } from './components/setup-form/setup-form.component';
import { BillInfoComponent } from './components/bill-info/bill-info.component';

const setupRoutes: Routes = [
  {
    path: '',
    component: SetupWizardComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(setupRoutes),
    MaterialModule,
    FormsModule
  ],
  providers: [SetupService],
  declarations: [SetupWizardComponent, SetupFormComponent, BillInfoComponent]
})
export class SetupModule { }
