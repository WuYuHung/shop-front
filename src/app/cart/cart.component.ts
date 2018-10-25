import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { $ } from 'protractor';
import { forEach } from '@angular/router/src/utils/collection';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  public products: number;

  cartList = [
    { id: 1000, name: "iphone5s", quantity: 3, price: 4300 },
    { id: 1001, name: "iphone5", quantity: 30, price: 3300 },
    { id: 1002, name: "imac", quantity: 3, price: 3000 },
    { id: 1003, name: "ipad", quantity: 5, price: 6900 }
  ];
  findIndex = function (id) {
    var index = -1;
    this.cartList.forEach(function (item, key) {
      if (item.id == id) {
        index = key;
        return;
      }
    }); return index;
  };


  remove = function (id) {
    var index = this.findIndex(id);
    if (index != -1) {
      this.cartList.splice(index, 1);
    }
  };
  addOne = function (id) {
    var index = this.findIndex(id);
    if (index != -1) {
      this.cartList[index].quantity++;
    }
  };
  reduceOne = function (id) {
    var index = this.findIndex(id);
    if (index != -1) {
      var item = this.cartList[index];
      if (item.quantity > 1) {
        item.quantity--;
      }
      else {
        var returnKey = confirm("刪除該商品？");
        if (returnKey) {
          this.remove(item.id);
        }
      }
    }
  };
  totalCost = function () {
    var total = 0;
    this.cartList.forEach(function (item, key) {
      total += item.quantity * item.price;
    });
    return total;
  };
  totalCount() {
    var count = 0;
    this.cartList.forEach(function (item, key) {
      count += item.quantity;
    });
    return count;
  };


  constructor() { }

  ngOnInit() {
  }

}

