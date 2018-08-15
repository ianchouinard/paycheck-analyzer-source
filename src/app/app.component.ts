import { Component } from '@angular/core';
import { DatastoreService } from './services/datastore.service';

@Component({
  selector: 'pc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private dataStore: DatastoreService) {}

  showActions(): boolean {
    return (this.dataStore.data && this.dataStore.data.length > 0);
  }

}
