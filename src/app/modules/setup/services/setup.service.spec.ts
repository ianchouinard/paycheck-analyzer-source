import { TestBed, inject } from '@angular/core/testing';
import { SetupService } from './setup.service';

describe('SetupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetupService]
    });
  });

  it('should be created', inject([SetupService], (service: SetupService) => {
    expect(service).toBeTruthy();
  }));

  it('should return data', inject([SetupService], (service: SetupService) => {
    const data = service.getInfo();
    expect(data).toBeTruthy();
  }));

  it('should set data', inject([SetupService], (service: SetupService) => {
    service.setInfo(new Date(), 'biweekyl', 999, []);
    service.calculateInfo();
    const data = service.getInfo();
    expect(data).toBeTruthy();
  }));
});
