import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  usernameText = 'jake';
  passwordText = '';
  invalidLogin = false;

  constructor(private router: Router, private loginService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginService.authenticate(this.usernameText, this.passwordText)
    ) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}