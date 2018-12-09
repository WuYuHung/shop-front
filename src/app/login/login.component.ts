import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  errorLogin = false;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (this.authService.isLogin()) {
      this.router.navigate(['/user']);
    } else {
    }
  }

  login() {
    // 帳號密碼的檢查
    this.authService.login(this.user).subscribe(
      (data: any) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = '/';
        } else {
          alert('fail');
        }
      },
      response => {
        if (response.error.error !== undefined) {
          if (response.error.error == 'Cancel') {
            alert('帳號已被停權，請聯絡我們以了解狀況');
          } else {
            this.errorLogin = true;
          }
        } else {
          this.errorLogin = false;
        }
      }
    );
  }
}
