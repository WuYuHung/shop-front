import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: string;
  get isLogin() {
    return this.authService.isLogin();
  }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.user_info().subscribe(data => {
      this.id = data['name'];
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
