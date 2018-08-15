import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthDisplayComponent } from './month-display.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipesModule } from '../../../pipes/pipes.module';

describe('MonthDisplayComponent', () => {
  let component: MonthDisplayComponent;
  let fixture: ComponentFixture<MonthDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PipesModule],
      declarations: [ MonthDisplayComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
