import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToGBPipe } from './to-gb.pipe';
import { MonthPipe } from './month.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ToGBPipe, MonthPipe],
  exports: [ToGBPipe, MonthPipe]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
