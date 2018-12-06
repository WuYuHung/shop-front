import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {
  check = false;
  id: number;
  product: any;
  toten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ShopService: ShopService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.ShopService.getSingle(this.id).subscribe(data => {
      this.product = data;
      this.product.quantity = 1;
      console.log(data);
    });
    for (let i = 0, len = localStorage.length; i < len; i++) {
      if (localStorage.key(i) != 'token') {
        if (
          JSON.parse(localStorage.getItem(localStorage.key(i))).id == this.id
        ) {
          this.check = true;
        }
      }
    }
  }
  addData() {
    if (!this.check) {
      localStorage.setItem(this.id.toString(), JSON.stringify(this.product));
    } else {
      localStorage.removeItem(this.id.toString());
    }
    this.check = !this.check;
    this.router.navigate(['/shopsingle/' + this.id]);
  }
  ChangingValue(event) {
    const quantity = event.target.value;
    this.product.quantity = Number(quantity);
  }

  nullproduct() {
    if (this.product == null) {
      return false;
    } else {
      return true;
    }
  }
}
