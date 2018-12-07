import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

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
  page: any = 1;
  page_list: number[] = [];
  cate_list: any;
  constructor(private route: ActivatedRoute, private ShopService: ShopService, private router: Router ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.ShopService.getAll().subscribe(data => {
        this.datas = data;
        let cate = params['category'];
        let so = params['sort'];
        let k = params['kw'];
        let p = 1;
        if (params['page'] != null) {
          p = params['page'];
        }
        if (so != null && so != 'none') {
          this.sort_kind = so;
          const sort_method = this.sort_kind.slice(0, 3);
          const sort_kindd = this.sort_kind.slice(3, this.sort_kind.length);
          this.ShopService.getsort(sort_method, sort_kindd).subscribe(
            data1 => {
              this.datas = data1;
              if (cate != null && cate != 0) {
                this.datas = this.datas.filter(t => t.category_id == Number(cate));
              }
              if (k != null) {
                this.datas = this.datas.filter(t => t.name.toLowerCase().includes(k.toLowerCase()));
              }
              if (p != null) {
                const max = Math.floor(this.datas.length / 30 + 1);
                for (let i = 1; i <= max; i++) {
                  this.page_list.push(i);
                }
                if (p <= 2) {
                  this.page_list = [1, 2, 3, 4, 5];
                  if (max < 5){
                    this.page_list = this.page_list.slice(0, max);
                  }
                } else {
                  this.page_list = this.page_list.slice(Number(p) - 3, Number(p) + 2);
                }
                this.datas = this.datas.slice((p - 1) * 30, (p * 30));
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
          if (p != null) {
            const max = Math.floor(this.datas.length / 30 + 1);
            for (let i = 1; i <= max; i++) {
              this.page_list.push(i);
            }
            if (p <= 2){
              this.page_list = [1,2,3,4,5];
            } else {
            this.page_list = this.page_list.slice(Number(p) - 3, Number(p) + 2);
            }
            this.datas = this.datas.slice((p - 1) * 30, (p * 30));
          }
        }
        this.category = cate;
        this.kw = k;
        this.sort_kind = so;
        this.page = p;
      });
    });

    /*////////////////////////
              CATEGORYS
    ///////////////////////*/
    this.ShopService.getCate(this.category).subscribe(data => {
      this.cate_list = data;
    });
  }
  generate_url(changed): string {
    let load_url = '/shop?';
    if (changed) {
      this.page = 1;
    }
    if (this.category != null) {
      load_url += '&category=' + this.category;
    }
    if (this.sort_kind != null) {
      load_url += '&sort=' + this.sort_kind;
    }
    if (this.kw != null) {
      load_url += '&kw=' + this.kw;
    }
    if (this.page != null) {
      load_url += '&page=' + this.page;
    }
    return load_url;
  }
  check() {

  }
  click(input) {
    this.category = input;
    window.location.href = this.generate_url(true);
  }
  sort_click(kind) {
    this.sort_kind = kind;
    window.location.href = this.generate_url(true);
  }
  enter(input) {
    this.kw = input;
    window.location.href = this.generate_url(true);
  }
  // pages
  asc() {
    this.page = Number(this.page) + 1;
    window.location.href = this.generate_url(false);
  }
  dec() {
    this.page = Number(this.page) - 1;
    window.location.href = this.generate_url(false);
  }
  change_page(input) {
    this.page = input;
    window.location.href = this.generate_url(false);
  }
}
