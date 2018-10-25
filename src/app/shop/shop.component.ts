import { Component, OnInit} from '@angular/core';
import jsonFile from 'src/assets/json/database.json';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  datas: any;
  cateories: string;
  id: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.cateories = this.route.snapshot.params['cateories'];
    this.datas = jsonFile;
    if (this.cateories != null) {
      this.datas = jsonFile.filter(t => t.cateories === this.cateories);
    }
  }
}
