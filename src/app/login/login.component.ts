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
      this.router.navigate(['/user/:id']);
    } else {
    }
  }

  login() {
    // 帳號密碼的檢查
    this.authService.login(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.history.back();
        } else {
          alert('fail');
        }
        // 之後可以再加register的400錯誤
      },
      response => {
        console.log(response);
        if (response.error.error !== undefined) {
          this.errorLogin = true;
        } else {
          this.errorLogin = false;
        }
      }
    );
  }
}
