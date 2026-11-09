import { Component } from '@angular/core';
import { LoginModel } from '../login-model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModel: LoginModel = new LoginModel();
  constructor(public authService: AuthService){

  }
}
