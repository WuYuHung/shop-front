import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-shop-rate',
  templateUrl: './shop-rate.component.html',
  styleUrls: ['./shop-rate.component.css']
})
export class ShopRateComponent implements OnInit {
  id: any;
  productName: any;
  ratelist: any;
  totalrate = 0;
  averate: any;
  user_rate = 10;
  reason: any;
  isLogin: any;
  toten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private route: ActivatedRoute, private shopService: ShopService, private authService: AuthService) { }

  ngOnInit() {
    this.isLogin = this.authService.isLogin();
    this.id = this.route.snapshot.params['kw'];
    this.shopService.getrate(this.id).subscribe(data => {
      this.ratelist = data;
      for (let i = 0; i < this.ratelist.length; i++) {
        this.totalrate += data[i]['rating'];
        }
      this.averate = (this.totalrate / this.ratelist.length).toFixed(1);
      this.shopService.getSingle(this.id).subscribe(single => {
        this.productName = single['name'];
      });
    });
  }
  ChangingValue(event) {
    this.user_rate = event.target.value;
    console.log(this.user_rate);
  }
  submit() {
    this.shopService.postrate(this.user_rate, this.id, this.reason).subscribe(response => {
      alert('送出成功！');
      location.reload();
    });
  }
}
