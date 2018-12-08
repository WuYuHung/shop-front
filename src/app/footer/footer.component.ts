declare var require: any;
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  email: any;

  emailError = false;
  ngOnInit() {
    // require('src/assets/js/subscribe-email.js');
  }

  onSubmit() {
    const Email = {
        email : this.email
    };
    this.authService.postSubscribe(Email).subscribe(data => {
      if (!this.emailError) {
        alert('訂閱成功');
        this.email = '';
      }
    }, response => {

      if (response.error.error != null) {
        alert('請輸入尚未訂閱的信箱並確認信箱格式是否正確');
        this.emailError = true;
      } else {
        this.emailError = false;
      }
    });
  }
}
