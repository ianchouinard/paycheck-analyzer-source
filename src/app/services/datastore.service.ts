import { Injectable } from '@angular/core';
import { payMonth } from '../modules/setup/models/payMonth.model';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  public dummyData: Array<payMonth> = [];
  public data: Array<payMonth> = [];

  constructor() { }

  setData(data: Array<payMonth>): void {
    this.data = data;
  }

  getData(): Array<payMonth> {
    return this.data;
  }

  getDummyData() {
    const dummyData: any = [
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Student Loans',
                cost: 300,
                due: '2018-08-08T04:00:00.000Z'
              },
              {
                name: 'Rat Food',
                cost: 1100,
                due: '2018-08-08T04:00:00.000Z'
              }
            ],
            date: '2018-08-02T04:00:00.000Z'
          },
          {
            bills: [
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              },
              {
                name: 'Thing1',
                cost: 520,
                due: '2018-08-22T04:00:00.000Z'
              },
              {
                name: 'Thing2',
                cost: 320,
                due: '2018-08-22T04:00:00.000Z'
              },
              {
                name: 'Thing3',
                cost: 410,
                due: '2018-08-22T04:00:00.000Z'
              },
              {
                name: 'Thing4',
                cost: 375,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2018-08-16T04:00:00.000Z'
          },
          {
            bills: [],
            date: '2018-08-30T04:00:00.000Z'
          }
        ],
        month: 7,
        grossPay: 6600,
        checkQuantity: 3,
        firstCheckDateInNextMonth: '2018-09-13T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2018-09-13T04:00:00.000Z'
          },
          {
            bills: [],
            date: '2018-09-27T04:00:00.000Z'
          }
        ],
        month: 8,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2018-10-11T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2018-10-11T04:00:00.000Z'
          },
          {
            bills: [],
            date: '2018-10-25T04:00:00.000Z'
          }
        ],
        month: 9,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2018-11-08T05:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Student Loans',
                cost: 300,
                due: '2018-08-08T04:00:00.000Z'
              }
            ],
            date: '2018-11-08T05:00:00.000Z'
          },
          {
            bills: [
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2018-11-22T05:00:00.000Z'
          }
        ],
        month: 10,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2018-12-06T05:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Student Loans',
                cost: 300,
                due: '2018-08-08T04:00:00.000Z'
              }
            ],
            date: '2018-12-06T05:00:00.000Z'
          },
          {
            bills: [
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2018-12-20T05:00:00.000Z'
          }
        ],
        month: 11,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-01-03T05:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Student Loans',
                cost: 300,
                due: '2018-08-08T04:00:00.000Z'
              }
            ],
            date: '2019-01-03T05:00:00.000Z'
          },
          {
            bills: [
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-01-17T05:00:00.000Z'
          },
          {
            bills: [],
            date: '2019-01-31T05:00:00.000Z'
          }
        ],
        month: 0,
        grossPay: 6600,
        checkQuantity: 3,
        firstCheckDateInNextMonth: '2019-02-14T05:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-02-14T05:00:00.000Z'
          },
          {
            bills: [],
            date: '2019-02-28T05:00:00.000Z'
          }
        ],
        month: 1,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-03-14T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-03-14T04:00:00.000Z'
          },
          {
            bills: [],
            date: '2019-03-28T04:00:00.000Z'
          }
        ],
        month: 2,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-04-11T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-04-11T04:00:00.000Z'
          },
          {
            bills: [],
            date: '2019-04-25T04:00:00.000Z'
          }
        ],
        month: 3,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-05-09T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-05-09T04:00:00.000Z'
          },
          {
            bills: [],
            date: '2019-05-23T04:00:00.000Z'
          }
        ],
        month: 4,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-06-06T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Student Loans',
                cost: 300,
                due: '2018-08-08T04:00:00.000Z'
              }
            ],
            date: '2019-06-06T04:00:00.000Z'
          },
          {
            bills: [
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-06-20T04:00:00.000Z'
          }
        ],
        month: 5,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-07-04T04:00:00.000Z'
      },
      {
        payDates: [
          {
            bills: [
              {
                name: 'Rent2',
                cost: 800,
                due: '2018-08-15T04:00:00.000Z'
              },
              {
                name: 'Student Loans',
                cost: 300,
                due: '2018-08-08T04:00:00.000Z'
              }
            ],
            date: '2019-07-04T04:00:00.000Z'
          },
          {
            bills: [
              {
                name: 'Car',
                cost: 390,
                due: '2018-08-22T04:00:00.000Z'
              }
            ],
            date: '2019-07-18T04:00:00.000Z'
          }
        ],
        month: 6,
        grossPay: 4400,
        checkQuantity: 2,
        firstCheckDateInNextMonth: '2019-08-01T04:00:00.000Z'
      }
    ];

    this.dummyData = dummyData;
    
    return this.dummyData;
  }

}
