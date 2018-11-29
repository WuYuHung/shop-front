import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


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
  sort_kindd: any;
  sort_method: any;
  constructor(private route: ActivatedRoute, private ShopService: ShopService ) { }

  ngOnInit() {
    this.ShopService.getAll().subscribe(data => {
    if (this.datas == null) {
      this.datas = data;
    }
    this.kw = this.route.snapshot.params['kw'];
    this.category = this.route.snapshot.params['category'];
    if (this.category != null) {
      this.datas = this.datas.filter(t => t.category_id == this.category);
    }
    if (this.kw != null) {
      this.datas = this.datas.filter(t => t.name.toLowerCase().includes(this.kw.toLowerCase()));
    }
    console.log(this.datas);
    });
  }
  check() {
    console.log(this.sort_kind);
  }
  ChangingValue(kind) {
    this.sort_kind = kind.target.value;
    this.sort_method = this.sort_kind.slice(0, 3);
    this.sort_kindd = this.sort_kind.slice(3, this.sort_kind.length);
    this.ShopService.getsort(this.sort_method, this.sort_kindd).subscribe(
      data => {
        console.log(data);
        this.datas = data;
        this.ngOnInit();
      }
    );
  }
}
