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
    subject: '',
    data: ''
  };

  send_user_message = {
    email: '',
    subject: '感謝您寶貴的意見',
    data: '感謝您的聯絡，我們將會盡速回覆您！'
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    this.send_user_message.email = this.contact_message.email;

    this.user_message.subject =
      'E2 Esport 管理平台有新的意見! 主旨 : ' + this.contact_message.subject;
    this.user_message.data =
      '來自' +
      this.contact_message.email +
      ' ( ' +
      this.contact_message.lastname +
      ' ' +
      this.contact_message.firstname +
      ' ) : ' +
      this.contact_message.data;

    this.authService.contact(this.send_user_message).subscribe((data: any) => {
      if (data.success) {
        // contact success : navigate to 首頁
        this.authService
          .contact(this.user_message)
          .subscribe((datas: any) => {});
        alert('感謝您的意見');
        this.router.navigate(['/']);
      } else {
        // contact fail
        alert('fail to email');
      }
    });
  }
}
