import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayOverviewComponent } from './pay-overview/pay-overview.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { MonthDisplayComponent } from './components/month-display/month-display.component';
import { PayperiodDisplayComponent } from './components/payperiod-display/payperiod-display.component';
import { PipesModule } from '../pipes/pipes.module';

const dashboardRoutes: Routes = [
  {
    path: '',
    component: PayOverviewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    PipesModule,
    MaterialModule
  ],
  declarations: [PayOverviewComponent, MonthDisplayComponent, PayperiodDisplayComponent]
})
export class DashboardModule { }
