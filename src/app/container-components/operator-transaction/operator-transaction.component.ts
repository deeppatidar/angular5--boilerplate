import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-transaction',
  templateUrl: './operator-transaction.component.html',
  styleUrls: ['./operator-transaction.component.scss']
})
export class OperatorTransactionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cardData: any = [
    { title: "Sales" , percent: 25 , value: "2000$" , icon: "fa fa-money" },
    { title: "Business" , percent: 50 , value: "200$" , icon: "fa fa-calendar" },
    { title: "Service" , percent: 100 , value: "5000$" , icon: "fa fa-plane" }
  ];
}
