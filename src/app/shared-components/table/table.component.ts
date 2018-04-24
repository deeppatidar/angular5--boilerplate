import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  optionsSelect: Array<any>;
  tableData: Array<any>;
  sortDirection = "asc";
  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
    this.tableData = [
      { tripId: '101', date: '05/21/2011', type: 'Accepted', name: 'Truner Flight', status: 'Completed', amount: '$5000 USD', view: 'detail'},
      { tripId: '102', date: '05/23/2017', type: 'Completed', name: 'Truner Flight', status: 'Completed', amount: '$5000 USD', view: 'detail'},
      { tripId: '103', date: '10/25/2016', type: 'Refunded', name: 'Acme Aviation', status: 'Pending', amount: '$1000 USD', view: 'detail'},
      { tripId: '104', date: '10/28/2016', type: 'Pending', name: 'Acme Aviation', status: 'Pending', amount: '$1000 USD', view: 'detail'}
    ];
  }

  sortData(key) {
    this.tableData.sort((a: any, b: any): any => {
        return (this.sortDirection == 'asc' ? (a[key] > b[key]) : (a[key] < b[key]));
    });
    if(this.sortDirection == "asc") {
      this.sortDirection = "desc";
    }
    else {
      this.sortDirection = "asc";
    }
  }
}
