import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/http/app.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableData: any;
  optionsSelect: any;

  cardData: any = [
    { title: "Sales" , percent: 25 , value: "2000$" , icon: "fa fa-money" },
    { title: "Business" , percent: 50 , value: "200$" , icon: "fa fa-calendar" },
    { title: "Service" , percent: 100 , value: "5000$" , icon: "fa fa-plane" }
  ];



  constructor(private appService: AppService) { }

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

}
