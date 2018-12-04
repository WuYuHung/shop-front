import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public products: number;
  cartList: any;
  couponid: any;
  get isLogin() {
    return this.authService.isLogin();
  }
  findIndex = function (id) {
    var index = -1;
    this.cartList.forEach(function (item, key) {
      if (item.id === id) {
        index = item.id;
        return;
      }
    }); return index;
  };

  findKey = function (id) {
    var index = -1;
    this.cartList.forEach(function (item, key) {
      if (item.id === id) {
        index = key;
        return;
      }
    }); return index;
  };
  remove = function (id) {
    var index = this.findIndex(id);
    if (index != -1) {

      this.cartList.splice(this.findKey(id), 1);
      localStorage.removeItem(index.toString());
    }
  };
  addOne = function (id) {
    var index = this.findKey(id);
    if (index != -1) {
      this.cartList[index].quantity++;
    }
  };
  reduceOne = function (id) {
    var index = this.findKey(id);
    if (index != -1) {
      var item = this.cartList[index];
      if (item.quantity > 1) {
        item.quantity--;
      }
      else {

        let returnKey = confirm("刪除該商品？");
        if (returnKey) {
          this.remove(item.id);
        }
      }
    }
  };
  totalCost = function () {
    let total = 0;
    this.cartList.forEach(t => total += t.price * t.quantity);
    return total;
  };
  deliver = function () {
    let total = 0;
    let tmp = this.totalCost();
    if (tmp <= 10000){
      total = 60;
    }
    return total;
  };
  total = function() {
    return this.totalCost() + this.deliver();
  }
  constructor(private router: Router, private authService: AuthService) {
    let json = '[';
    let minus = 1;
    for (let i = 0, len = localStorage.length; i < len; i++) {
      if (localStorage.key(i) == 'token'){
        minus = 2;
      }
    }
    for (let i = 0, len = localStorage.length; i < len; i++) {
      if (localStorage.key(i) != 'token') {
      json += localStorage.getItem(localStorage.key(i)) + '';
     if (i !== len - minus) {
      json += ',';
     }
    }
    }
    json += ']';
    console.log(json);
    this.cartList = JSON.parse(json);
    this.cartList = this.cartList.filter(t => !t.paid);
  }

  ngOnInit() {
  }
  check() {
    if (this.couponid === 'ponid-dinop' || this.couponid === 'g2esp-pse2g') {
      alert('輸入成功！');
    } else {
      alert('認證失敗，請確認您的折價券代號！');
    }
  }
  clearCart() {
    for (let i = 0, len = localStorage.length; i < len; i++) {
      if (localStorage.key(i) != 'token') {
        localStorage.removeItem(localStorage.key(i));
      }
    }
    location.reload();
  }
  checkout() {
    if (this.isLogin) {
      this.router.navigate(['/pay']);
    } else {
      alert('請先登入');
      this.router.navigate(['/login']);
    }
  }
}

