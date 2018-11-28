import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']

})

export class PayComponent implements OnInit {
  c_email_address:string;
  c_fname:string;
  c_lname:string;
  c_address:string;
  c_phone:any;
  checkkk = false;



  cartList: any;
  constructor() {
    let json = '[';
    for (let i = 0, len = localStorage.length; i < len; i++) {

      json += localStorage.getItem(localStorage.key(i)) + '';
      if (i !== len - 1) {
        json += ',';
      }
    }
    json += ']';
    this.cartList = JSON.parse(json);

  }

  ngOnInit() {
  }

  check() {

      if (this.c_email_address.includes('@') && this.c_fname != null && this.c_lname != null && this.c_address != null && this.c_phone.length() === 10 )
      {
        return 1;
      }
      else return 0;





  }

  pay() {

    for (let i = 0; i < this.cartList.length; i++) {
      this.cartList[i]['paid'] = true;
      localStorage.setItem(localStorage.key(i), JSON.stringify(this.cartList[i]));

    }
  }

}



