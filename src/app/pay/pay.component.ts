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
  c_phone:string;
  checkkk:any;

  

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
  
  check(){

      if(c_email_address.includes('@')&&c_fname != null&&c_lname != null&&c_address != null&&c_phone.length() == 10 )
      {
        return 1;
      }
      else 0;





  }

  pay() {

    for (let i = 0; i < this.cartList.length; i++) {
      this.cartList[i]['paid'] = true;
      localStorage.setItem(localStorage.key(i), JSON.stringify(this.cartList[i]));
      
    }
  }
  
 
}



