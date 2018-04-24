import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  cardData: any = [
    { title: "Sales" , percent: 25 , value: "2000$" , icon: "fa fa-money" },
    { title: "Business" , percent: 50 , value: "200$" , icon: "fa fa-calendar" },
    { title: "Service" , percent: 100 , value: "5000$" , icon: "fa fa-plane" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
