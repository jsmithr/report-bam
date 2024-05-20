import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'report-api';
  loading = false;
  data: any[] | null = null;

  getData() {
    this.loading = true;
    this.data = [];

    fetch('https://commons.qa-bam.com/administration/v1/transactions/THIRD_PARTY_TRANSFER?channel=svp').then((res: any) => {
      this.data = res;
    }).finally(() => {
      this.loading = false;
    })
  }
}
