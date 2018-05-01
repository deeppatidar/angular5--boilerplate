import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/http/app.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-broker-transaction',
  templateUrl: './broker-transaction.component.html',
  styleUrls: ['./broker-transaction.component.scss']
})
export class BrokerTransactionComponent implements OnInit {
  optionsSelect: Array<any>;
  tableData: any;
  sortDirection = "asc";
  startDate: any;
  endDate : any;
  search: string;
  model: string;
  model1: any;
  tripDetail= { "confirm": 1 , "completed": 4 , "cancelled": 10  };
  cardData: any = [
    { title: "Sales" , percent: 25 , value: "$2000" , icon: "fa fa-money" },
    { title: "Business" , percent: 50 , value: "$200" , icon: "fa fa-calendar" },
    { title: "Service" , percent: 100 , value: "$5000" , icon: "fa fa-plane" }
  ];
  paymentDetail = {
    paymentacc: "#0001" , BBVAacc: "01239" , BBVATypeChecking: "Checking"
  };
  constructor(private appService: AppService) { }

  ngOnInit() {
    let arr = [];
    this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
    this.appService.getTransactionData().subscribe(
      data => {
         this.tableData = data.map((value)=> {
          value['toggle']=false;
          for (let key in value) {

            if(value[key]== '' && key != "toggle") {
              console.log(key);
              value[key]="-";
            }
          }
          return value;
        });
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
