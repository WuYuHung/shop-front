import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user = {
    name: '',
    birthdate: '',
    address: '',
    phone: ''
  };

  nameError = '';
  birthdateError = '';
  addressError = '';
  phoneError = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLogin()) {
    } else {
      alert('請先登入');
      this.router.navigate(['/login']);
    }

    this.authService.user_info().subscribe(data => {
      console.log(data);
      this.user.name = data['name'];
      this.user.birthdate = data['birthdate'];
      this.user.address = data['address'];
      this.user.phone = data['phone'];
      this.user.address = data['address'];
      console.log(this.user);
    });
  }
  filled() {
    if (
      this.user.name !== '' &&
      this.user.birthdate !== '' &&
      this.user.address !== '' &&
      this.user.phone !== ''
    ) {
      return 0;
    } else {
      return 1;
    }
  }

  edit() {
    console.log(this.user); // test : show the user input
    this.authService.edit(this.user).subscribe(
      (data: any) => {
        console.log(data);
        alert('以更新資料');
        this.router.navigate(['/user']);
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
      }
    );
  }
}
