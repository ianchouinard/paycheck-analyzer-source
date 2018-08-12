import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../../services/datastore.service';

@Component({
  selector: 'pc-pay-overview',
  templateUrl: './pay-overview.component.html',
  styleUrls: ['./pay-overview.component.scss']
})
export class PayOverviewComponent implements OnInit {

  public payMonths: any;

  constructor(
    private dataStore: DatastoreService
  ) { }

  ngOnInit() {
    this.payMonths = this.dataStore.getDummyData();
  }

}
