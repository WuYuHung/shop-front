import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }
  buy2(status) {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenParse}`
    });
    console.log(headers);
    return this.httpClient.get(`http://localhost:8000/api/user/orders/${status}/products`, { headers: headers });
  }
}
