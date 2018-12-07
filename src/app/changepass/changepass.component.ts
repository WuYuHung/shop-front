import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ShopService } from '../shop.service';
@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  email: any;
  newpass: any;
  confirmpass: any;
  token: any;
  errorreset = false;

  constructor(private router: Router, private route: ActivatedRoute, private ShopService: ShopService) { }

  ngOnInit() {
    this.token = this.route.snapshot.params['token'];
    this.ShopService.findtoken(this.token).subscribe(data => {

    }
    );
  }

  sendpass() {
    if (this.newpass !== this.confirmpass) {
      alert('重新輸入密碼與確認新密碼');
      return;
    }
    const info = {
      email: this.email,
      password: this.newpass,
      password_confirmation: this.confirmpass,
      token: this.token
    };

    this.ShopService.postnewpass(info).subscribe(data => {

      if (!this.errorreset) {
        window.location.href = '/login';
        alert('請進入信箱確認密碼是否重設成功!');
      }
    }, response => {
      console.log(response);
      if (response.error.error != null) {
        this.errorreset = true;
      } else {
        this.errorreset = false;
      }
    });

  }

}
