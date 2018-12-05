import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact_message = {
    lastname: '',
    firstname: '',
    email: '',
    title: '',
    message: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.contact_message);
  }
}
