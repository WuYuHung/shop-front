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
  ngOnInit() {
    // require('src/assets/js/subscribe-email.js');
  }

  onSubmit() {
    const Email = {
        email : this.email
    };

    this.authService.postSubscribe(Email).subscribe(data => {
    }, response => {

      if (response.error != null) {
        alert('請輸入尚未訂閱的信箱');
      } else {
        alert('訂閱成功');
      }
    });
  }
}
