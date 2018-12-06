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
    message: ''
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.contact_message);
    this.authService.contact(this.contact_message).subscribe((data: any) => {
      console.log(data);
      if (data.success) {
        // contact success : navigate to 首頁
        alert('感謝您的意見');
        this.router.navigate(['/']);
      } else {
        // contact fail
        alert('fail to register');
      }
    });
  }
}
