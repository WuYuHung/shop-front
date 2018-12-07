import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    email: '',
    birthdate: '',
    address: '',
    phone: '',
    password: '',
    password_confirmation: '',
    photo_path: ''
  };
  checkbox = false;

  nameError = '';
  emailError = '';
  birthdateError = '';
  addressError = '';
  phoneError = '';
  passwordError = '';
  password_confirmationError = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  // to test if all the field is filled, otherwise the button can't be push
  filled() {
    if (
      this.user.name !== '' &&
      this.user.email !== '' &&
      this.user.birthdate !== '' &&
      this.user.address !== '' &&
      this.user.phone !== '' &&
      this.user.password !== '' &&
      this.user.password_confirmation !== '' &&
      this.checkbox !== false
    ) {
      return 0;
    } else {
      return 1;
    }
  }

  register() {
    console.log(this.user); // test : show the user input
    this.authService.register(this.user).subscribe(
      (data: any) => {
        console.log(data);
        if (data.success) {
          // register success : navigate to login
          if (this.authService.isLogin()) {
            alert('你已創立一個新用戶，如需登入新帳號請先登出目前帳號');
          }
          this.router.navigate(['/login']);
        } else {
          // register fail : 應該是後端那裏失敗??
          alert('fail to register');
        }
      },
      response => {
        console.log(response); // test : show the http response
        // name error response
        if (response === 0) {
          alert('後端未開啟');
        }
        if (response.error.errors.name !== undefined) {
          this.nameError = response.error.errors.name[0];
        } else {
          this.nameError = '';
        }
        // email error response
        if (response.error.errors.email !== undefined) {
          this.emailError = response.error.errors.email[0];
        } else {
          this.emailError = '';
        }
        // birthdate error response
        if (response.error.errors.birthdate !== undefined) {
          this.birthdateError = response.error.errors.birthdate[0];
        } else {
          this.birthdateError = '';
        }
        // address error response
        if (response.error.errors.address !== undefined) {
          this.addressError = response.error.errors.address[0];
        } else {
          this.addressError = '';
        }
        // phone error response
        if (response.error.errors.phone !== undefined) {
          this.phoneError = response.error.errors.phone[0];
        } else {
          this.phoneError = '';
        }
        // password error response
        if (response.error.errors.password !== undefined) {
          this.passwordError = response.error.errors.password[0];
        } else {
          this.passwordError = '';
        }
        // password_confirmation response
        if (response.error.errors.password_confirmation !== undefined) {
          this.password_confirmationError =
            response.error.errors.password_confirmation[0];
        } else {
          this.password_confirmationError = '';
        }

        // alert(response.error.message);
      }
    );
  }
}
