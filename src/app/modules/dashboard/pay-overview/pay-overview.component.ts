import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../../../services/datastore.service';
import { payMonth } from '../../setup/models/payMonth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'pc-pay-overview',
  templateUrl: './pay-overview.component.html',
  styleUrls: ['./pay-overview.component.scss']
})
export class PayOverviewComponent implements OnInit {

  public payMonths: Array<payMonth>;

  constructor(
    private dataStore: DatastoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.payMonths = this.dataStore.getData();

    // No data yet, navigate back to setup
    if (!this.payMonths || this.payMonths.length < 1) {
      this.router.navigateByUrl('/');
    }
  }

}
