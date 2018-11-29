import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLogin() {
    return localStorage.getItem('token');
  } //到時候去header，寫<登入 註冊>等tag
}
