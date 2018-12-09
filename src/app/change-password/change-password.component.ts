import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  change = {
    origin_password: '',
    new_password: '',
    new_confirmation: ''
  };

  passwordError = '';
  newpasswordError = '';
  newconfirmationError = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLogin()) {
    } else {
      alert('請先登入');
      this.router.navigate(['/login']);
    }
  }

  filled() {
    if (
      this.change.origin_password !== '' &&
      this.change.new_password !== '' &&
      this.change.new_confirmation !== ''
    ) {
      return 0;
    } else {
      return 1;
    }
  }

  edit() {
    this.authService.change(this.change).subscribe(
      (data: any) => {
        if (data['error'] !== undefined) {
          this.passwordError = data['error'];
        } else {
          this.passwordError = '';
          alert('以更新密碼');
          this.router.navigate(['/user']);
        }
      },
      response => {
        // name error response
        if (response === 0) {
          alert('後端未開啟');
        }

        if (response.error.errors.new_password !== undefined) {
          this.newpasswordError = response.error.errors.new_password[0];
        } else {
          this.newpasswordError = '';
        }
        if (response.error.errors.new_confirmation !== undefined) {
          this.newconfirmationError = response.error.errors.new_confirmation[0];
        } else {
          this.newconfirmationError = '';
        }
      }
    );
  }
}
