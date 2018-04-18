import { Component, OnInit } from '@angular/core';
import { LocalforageService } from '../../services/utils/localforage.service';
import { AppService } from '../../services/http/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showEmailErrorMsg:boolean = false;
  showPassErrorMsg:boolean = false;
  constructor(private localforageService: LocalforageService, private appService: AppService) {
  }

  ngOnInit() {
  }

  login({value, valid }) {
      this.showEmailErrorMsg = false;
      this.showPassErrorMsg = false;
      if(!valid) {
        if(!value.emailVal && !value.passwordVal) {
            this.showEmailErrorMsg = true;
            this.showPassErrorMsg = true;
        }else if(!value.passwordVal){
            this.showPassErrorMsg = true;
        } else if(!value.emailVal) {
            this.showEmailErrorMsg = true;
        }
      } else {

        this.localforageService.setItem({key: 'isLoggedIn' , value: true}).then(()=> {
            this.appService.loginUser(value).subscribe(success => {
              console.log(success)
            });
            //this.router.navigate(['home']);
        });
      }
  }
}
