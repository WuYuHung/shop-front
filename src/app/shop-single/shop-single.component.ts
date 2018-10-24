import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-single',
  templateUrl: './shop-single.component.html',
  styleUrls: ['./shop-single.component.css']
})
export class ShopSingleComponent implements OnInit {
  productId: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
  }

}
