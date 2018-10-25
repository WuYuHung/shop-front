import { Component, OnInit, Input, Output, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import jsonFile from 'src/assets/json/database.json';
import cartFile from 'src/assets/json/cart.json';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})

export class ShopSingleComponent implements OnInit {
  check: boolean;
  id: number;
  tmp: any;
  product: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.product = jsonFile[this.id - 1];
    this.check = localStorage.getItem(this.id.toString()) ? true : false;
  }

  addData() {

    if (!this.check) {
      this.product['paid'] = false;
      this.product['quantity'] = 0;
      localStorage.setItem(this.id.toString(), JSON.stringify(this.product));
    } else {
      localStorage.removeItem(this.id.toString());
    }

    this.check = !this.check;
    for (let i = 0, len = localStorage.length; i < len; i++) {
      console.log(localStorage.key(i));
      console.log(localStorage.getItem(localStorage.key(i)));
    }
    console.log(this.check);
  }
}
