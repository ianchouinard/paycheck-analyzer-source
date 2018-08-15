import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOverviewComponent } from './pay-overview.component';
import { DatastoreService } from '../../../services/datastore.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PayOverviewComponent', () => {
  let component: PayOverviewComponent;
  let fixture: ComponentFixture<PayOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PayOverviewComponent ],
      providers: [DatastoreService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
