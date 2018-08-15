import { TestBed, inject } from '@angular/core/testing';

import { DatastoreService } from './datastore.service';
import { payMonth } from '../modules/setup/models/payMonth.model';

describe('DatastoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatastoreService]
    });
  });

  it('should be created', inject([DatastoreService], (service: DatastoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should set and get data', inject([DatastoreService], (service: DatastoreService) => {
    const data: Array<payMonth> = []
    const month: payMonth = <payMonth>{};
    month.checkQuantity = 3;
    month.grossPay = 999;
    data.push(month);

    service.setData(data);
    const test = service.getData();

    expect(test).toEqual(data);
  }));
});
