import { Component, OnInit} from '@angular/core';
import jsonFile from 'src/assets/json/database.json';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  name: any;
  datas: any;
  cateories: string;
  id: number;
  kw: any;
  constructor(private route: ActivatedRoute, private ShopService: ShopService ) { }

  ngOnInit() {
    this.ShopService.getAll().subscribe(data => { this.datas = data; console.log(data); });
    this.kw = this.route.snapshot.params['kw'];
    this.cateories = this.route.snapshot.params['cateories'];
    this.datas = jsonFile;
    if (this.cateories != null) {
      this.datas = this.datas.filter(t => t.cateories === this.cateories);
    }
    if (this.kw != null) {
      this.datas = this.datas.filter(t => t.name.toLowerCase().includes(this.kw.toLowerCase()));
    }
  }

  click($data) {
    this.datas = jsonFile;
    if ($data !== ' ') {
      this.datas = jsonFile.filter(t => t.cateories === $data);
    }
  }
}
