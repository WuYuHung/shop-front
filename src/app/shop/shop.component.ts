import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { load } from '@angular/core/src/render3/instructions';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  name: any;
  datas: any;
  category: string;
  id: number;
  kw: any;
  sort_kind = 'all';
  constructor(private route: ActivatedRoute, private ShopService: ShopService, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ShopService.getAll().subscribe(data => {
        this.datas = data;
        let cate = params['category'];
        let so = params['sort'];
        let k = params['kw'];
        if (so != null && so != 'none') {
          this.sort_kind = so;
          const sort_method = this.sort_kind.slice(0, 3);
          const sort_kindd = this.sort_kind.slice(3, this.sort_kind.length);
          this.ShopService.getsort(sort_method, sort_kindd).subscribe(
            data1 => {
              this.datas = data1;
              if (cate != null && cate != 0) {
                console.log('called', cate);
                this.datas = this.datas.filter(t => t.category_id == Number(cate));
              }
              if (k != null) {
                this.datas = this.datas.filter(t => t.name.toLowerCase().includes(k.toLowerCase()));
              }
            }
          );
        } else {
          if (cate != null && cate != 0) {
            this.datas = this.datas.filter(t => t.category_id == Number(cate));
          }
          if (k != null) {
            this.datas = this.datas.filter(t => t.name.toLowerCase().includes(k.toLowerCase()));
          }
        }
        this.category = cate;
        this.kw = k;
        this.sort_kind = so;
      });
    });
  }
  generate_url(): string {
    let load_url = '/shop?';
    if (this.category != null) {
      load_url += '&category=' + this.category;
    }
    if (this.sort_kind != null) {
      load_url += '&sort=' + this.sort_kind;
    }
    if (this.kw != null) {
      load_url += '&kw=' + this.kw;
    }
    return load_url;
  }
  check() {

  }
  click(input) {
    this.category = input;
    window.location.href = this.generate_url();
  }
  sort_click(kind) {
    this.sort_kind = kind;
    window.location.href = this.generate_url();
  }
  enter(input) {
    this.kw = input;
    window.location.href = this.generate_url();
  }
}
