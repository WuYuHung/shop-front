declare var require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // require('src/assets/js/subscribe-email.js');
  }
}
