import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { $ } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { identifierModuleUrl } from '@angular/compiler';
import { JsonPipe } from '@angular/common';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public products: number;
  cartList: [];

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
  totalCount() {
    let count = 0;
    this.cartList.forEach(t => count += t.quantity);
    return count;
  }


  constructor() {
    console.log(localStorage.length);
    let json = '[';
    for (let i = 0, len = localStorage.length; i < len; i++) {

     json += localStorage.getItem(localStorage.key(i)) + '';
     if (i !== len - 1) {
      json += ',';
     }
    }
    json += ']';
    console.log(json);
    this.cartList = JSON.parse(json);
  }

  ngOnInit() {
  }

}

