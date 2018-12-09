import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  register(user) {
    return this.httpClient.post('http://localhost:8000/api/register', user);
  }

  login(user) {
    return this.httpClient.post('http://localhost:8000/api/login', user);
  }
  change_photo(exten, base64) {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenParse}`
    });
    return this.httpClient.post(
      'http://localhost:8000/api/user/photo',
      {
        extension: exten,
        image: base64
      },
      {
        headers: headers
      }
    );
  }

  user_info() {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenParse}`
    });
    return this.httpClient.get('http://localhost:8000/api/user', {
      headers: headers
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogin() {
    const token = localStorage.getItem('token');
    return localStorage.getItem('token');
  }

  contact(user) {
    return this.httpClient.post('http://localhost:8000/api/sendemail', user);
  }

  edit(user) {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenParse}`
    });
    return this.httpClient.post('http://localhost:8000/api/user', user, {
      headers: headers
    });
  }

  change(user) {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenParse}`
    });
    return this.httpClient.post(
      'http://localhost:8000/api/user/password',
      user,
      {
        headers: headers
      }
    );
  }

  postSubscribe(email) {
    return this.httpClient.post('http://localhost:8000/api/subscribe', email);
  }
}
