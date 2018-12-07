import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  email: any;
  erroremail = false;
  constructor(private ShopService: ShopService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  sendmail() {

    const send = {
      email: this.email
    };

    this.ShopService.postmail(send).subscribe(data => {

      console.log(data);
      if (this.erroremail === false) {
        alert('請至填寫信箱收信');
      } else {
        alert('信箱錯誤');
      }

    }, response => {
      console.log(response);
      if (response.error.error != null) {
        this.erroremail = true;
      } else {
        this.erroremail = false;
      }
    });


  }
}
