import { Component, Injectable,  OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [],
})
export class LoginComponent implements OnInit {
  constructor(public help: HelperService) {}

  incorrectData: boolean = false;

  getClass() {
    if (this.help.inputData.valid) {
      return 'login-button';
    } else {
      return 'disabled-button';
    }
  } // here is the disable and unable functionality of the login button.
  loginUser() {
    if (
      this.help.loginData[0].username == this.help.inputData.value.username &&
      this.help.loginData[0].password == this.help.inputData.value.password
    ) {
      this.help.statusGetter = true;
      this.incorrectData = false;
    } else {
      this.incorrectData = true;
    }
  } // if all the data from the form and API are ok, we can change de front page and start the application.

  ngOnInit(): void {}
}
