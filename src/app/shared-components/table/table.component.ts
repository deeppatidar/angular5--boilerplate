import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/http/app.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  optionsSelect: Array<any>;
  tableData: Array<any>;
  sortDirection = "asc";
  startDate: any;
  endDate : any;
  search: string;
  model: string;
  model1: any;

  constructor(private appService : AppService) {

  };


  ngOnInit() {
    this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];

    this.appService.getTableData().subscribe(
      data => {
        this.tableData = data;
      },
      (err: HttpErrorResponse) => {
        console.log (err);
      }
    );
  }

  searchData(startDate: string, endDate: string, showOnly: string, searchKeyword: any) {

  };

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
