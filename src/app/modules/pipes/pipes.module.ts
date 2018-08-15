import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthPipe } from './month.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MonthPipe],
  exports: [MonthPipe]
})
export class PipesModule {
  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }
}
