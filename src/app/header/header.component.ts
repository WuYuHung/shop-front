import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  productCount = 0;
  keyList: any;
  constructor() {
    for (let i = 0, len = localStorage.length; i < len; i++) {
      let json = JSON.parse(localStorage[localStorage.key(i)]);
      if (json['paid'] === false) {
        this.productCount++;
      }
    }
  }

  ngOnInit() {
  }
}
