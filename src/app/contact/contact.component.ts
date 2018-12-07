import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
    subject: '',
    data: ''
  };

  user_message = {
    email: 'g2esportsshoes@gmail.com',
    subject:
      '來自' +
      this.contact_message.lastname +
      this.contact_message.firstname +
      '的訊息',
    data: this.contact_message.data
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.contact_message);
    this.user_message.subject =
      '來自' +
      this.contact_message.lastname +
      this.contact_message.firstname +
      '的訊息 : ' +
      this.contact_message.subject;
    this.user_message.data = this.contact_message.data;

    console.log(this.user_message);
    this.authService.contact(this.contact_message).subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        // contact success : navigate to 首頁
        this.authService.contact(this.user_message).subscribe((datas: any) => {
          console.log(datas);
        });
        alert('感謝您的意見');
        this.router.navigate(['/']);
      } else {
        // contact fail
        alert('fail to email');
      }
    });
  }
}
