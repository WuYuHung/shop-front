import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  url = location.href;
  userid = this.url.split('/')[4];
  code;
  key = 'Mike is thin';
  constructor() { }
  ngOnInit() {
  }
  onclick() {
    if (this.code === this.key) {
      alert('pass');
    }
    else {
      alert('get the fuck out');
    }
  }
}
