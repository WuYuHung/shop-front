import { Component, OnInit } from "@angular/core";
import { url } from "inspector";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  url = location.href;
  userid = this.url.split("/")[4];
  code;
  key = "Mike is thin";
  cartList: any;

  findIndex = function(id) {
    var index = -1;
    this.cartList.forEach(function(item, key) {
      if (item.id === id) {
        index = item.id;
        return;
      }
    });
    return index;
  };

  findKey = function(id) {
    var index = -1;
    this.cartList.forEach(function(item, key) {
      if (item.id === id) {
        index = key;
        return;
      }
    });
    return index;
  };
  remove = function(id) {
    var index = this.findIndex(id);
    if (index != -1) {
      this.cartList.splice(this.findKey(id), 1);
      localStorage.removeItem(index.toString());
    }
  };

  constructor() {}
  ngOnInit() {}
  onclick() {
    if (this.code === this.key) {
      alert("pass");
    } else {
      alert("get the fuck out");
    }
  }
  unpaid() {
    let json = "[";
    for (let i = 0, len = localStorage.length; i < len; i++) {
      json += localStorage.getItem(localStorage.key(i)) + "";
      if (i !== len - 1) {
        json += ",";
      }
    }
    json += "]";
    console.log(json);
    this.cartList = JSON.parse(json);
    this.cartList = this.cartList.filter(t => !t.paid);
  }
  unout() {
    let json = "[";
    for (let i = 0, len = localStorage.length; i < len; i++) {
      json += localStorage.getItem(localStorage.key(i)) + "";
      if (i !== len - 1) {
        json += ",";
      }
    }
    json += "]";
    console.log(json);
    this.cartList = JSON.parse(json);
    this.cartList = this.cartList.filter(t => t.paid);
  }
  undo() {
    this.cartList = [];
  }
}
