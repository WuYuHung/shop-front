import { Component, OnInit} from '@angular/core';
import jsonFile from 'src/assets/json/database.json';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  datas: any;
  id: number;
  constructor() { }

  ngOnInit() {
    this.datas = jsonFile;
  }
}
