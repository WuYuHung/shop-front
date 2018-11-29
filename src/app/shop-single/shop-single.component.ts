import { Component, OnInit, Input, Output, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
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
  checkdata: any;
  toten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private router: Router, private route: ActivatedRoute, private ShopService: ShopService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.ShopService.getSingle(this.id).subscribe(data => { this.product = data; console.log(data); });
  }

  addData() {

    if (!this.check) {
      this.product['paid'] = false;
      this.product['quantity'] = 1;
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
    location.reload();
  }
}
