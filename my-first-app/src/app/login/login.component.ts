import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';

  onClick(event: any) {
    this.username = '';
  }

  isButtonDisabled() {
    return this.username === '';
  }
}
