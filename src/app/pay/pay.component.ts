import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  cartList: any;
  constructor() {
    let json = '[';
    for (let i = 0, len = localStorage.length; i < len; i++) {

      json += localStorage.getItem(localStorage.key(i)) + '';
      if (i !== len - 1) {
        json += ',';
      }
    }
    json += ']';
    this.cartList = JSON.parse(json);
  }

  ngOnInit() {
  }
  pay() {

    for (let i = 0; i < this.cartList.length; i++) {
      this.cartList[i]['paid'] = true;
      localStorage.setItem(localStorage.key(i), JSON.stringify(this.cartList[i]));
    }
  }
}
