import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SetupFormComponent } from './setup-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { MatNativeDateModule } from '@angular/material';
import { setupForm } from '../../models/setupForm.model';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SetupFormComponent', () => {
  let component: SetupFormComponent;
  let fixture: ComponentFixture<SetupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatNativeDateModule, FormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [ SetupFormComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.model = <setupForm>{};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate the form', () => {
      const valid = component.validate();

      expect(valid).toBe(false);
      expect(component.dateError).toBe(true);
      expect(component.payError).toBe(true);
  });

  it('should emit a submit event', () => {
    component.model.lastPayDate = new Date();
    component.model.biWeekly = true;
    component.model.grossPayPerCheck = 900;
    fixture.detectChanges();

    spyOn(component.formSubmit, 'emit');

    component.submitForm();
    fixture.detectChanges();

    expect(component.formSubmit.emit).toHaveBeenCalled();
  });
});
