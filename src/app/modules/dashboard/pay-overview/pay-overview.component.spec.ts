import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOverviewComponent } from './pay-overview.component';

describe('PayOverviewComponent', () => {
  let component: PayOverviewComponent;
  let fixture: ComponentFixture<PayOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
