import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardData: any = [
    { title: "Sales" , percent: 25 , value: "2000$" , icon: "fa fa-money" },
    { title: "Business" , percent: 50 , value: "200$" , icon: "fa fa-calendar" },
    { title: "Service" , percent: 100 , value: "5000$" , icon: "fa fa-plane" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
