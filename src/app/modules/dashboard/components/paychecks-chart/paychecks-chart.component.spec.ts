import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaychecksChartComponent } from './paychecks-chart.component';
import { PipesModule } from '../../../pipes/pipes.module';

describe('PaychecksChartComponent', () => {
  let component: PaychecksChartComponent;
  let fixture: ComponentFixture<PaychecksChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
			imports: [PipesModule],
      declarations: [ PaychecksChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaychecksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
