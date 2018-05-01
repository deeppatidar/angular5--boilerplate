import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/http/app.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-operator-transaction',
  templateUrl: './operator-transaction.component.html',
  styleUrls: ['./operator-transaction.component.scss']
})
export class OperatorTransactionComponent implements OnInit {

  optionsSelect: Array<any>;
  tableData: Array<any>;
  sortDirection = "asc";
  startDate: any;
  endDate : any;
  search: string;
  model: string;
  model1: any;

  cardData: any = [
    { title: "Sales" , percent: 25 , value: "$2000" , icon: "fa fa-money" },
    { title: "Business" , percent: 50 , value: "$200" , icon: "fa fa-calendar" },
    { title: "Service" , percent: 100 , value: "$5000" , icon: "fa fa-plane" }
  ];

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
        console.log(this.tableData);
      },
      (err: HttpErrorResponse) => {
        console.log (err);
      }
    );
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
