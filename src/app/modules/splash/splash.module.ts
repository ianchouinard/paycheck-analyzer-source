import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashpageComponent } from './splash-page/splashpage/splashpage.component';
import { Routes, RouterModule } from '@angular/router';

const splashRoutes: Routes = [
  {
    path: '',
    component: SplashpageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(splashRoutes)
  ],
  declarations: [SplashpageComponent]
})
export class SplashModule { }
