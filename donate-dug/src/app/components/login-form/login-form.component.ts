import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  user: User;
  invalidLogin = false;

  constructor(private router: Router, private loginService: AuthService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    (this.loginService.authenticate(this.user).subscribe(
      data => {
        this.router.navigate(['']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    ));
  }

  gotoProfile() {
    this.router.navigate(['/user/profile']);
  }
}
