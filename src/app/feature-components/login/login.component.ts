import { Component, OnInit } from '@angular/core';
import { LocalforageService } from '../../services/utils/localforage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private localforageService: LocalforageService) {
  }

  ngOnInit() {
  }

}
