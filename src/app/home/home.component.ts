import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user_info().subscribe(data => {
      console.log(data);
    }
   );
  }
  clear() {
    localStorage.clear();
    }
}
