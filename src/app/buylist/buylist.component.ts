import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-buylist',
  templateUrl: './buylist.component.html',
  styleUrls: ['./buylist.component.css']
})
export class BuylistComponent implements OnInit {
  order_id: any;
  finishlist: any;
  sendlist: any;
  paylist: any;
  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderService.buy2('pay').subscribe(data => {
      this.paylist = data;
      console.log(data);
    });
    this.orderService.buy2('stock').subscribe(data => {
      this.sendlist = data;
      console.log(data);
    });
    this.orderService.buy2('finish').subscribe(data => {
      this.finishlist = data;
      console.log(data);
    });
  }
}
