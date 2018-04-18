import { Component, OnInit } from '@angular/core';
import { LocalforageService } from '../../services/utils/localforage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private localforageService: LocalforageService) {
    // let _this = this;
    // this.lfsService.setItem({key: 'loginData' , value: 'data', expTime: 60*2}).then(function () {
    // _this.lfsService.getItem({key: 'loginData'}).then(function(data) {
    //   console.log(data);
    //     });
    // });
  }

  ngOnInit() {
  }

}
