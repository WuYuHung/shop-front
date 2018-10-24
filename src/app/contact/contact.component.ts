declare var require: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message = [];

  constructor() {}

  ngOnInit() {
    require('src/assets/js/contact-email.js');
  }

  onSubmit(value) {
    this.message.push(value.value);
    console.log(this.message);
  }
}
