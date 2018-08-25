import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule,
  MatButtonModule,
  MatGridListModule,
  MatListModule,
  MatDividerModule,
  MatSliderModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatChipsModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatSelectModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatChipsModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
