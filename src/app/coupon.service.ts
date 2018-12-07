import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpClient: HttpClient) { }
  getcoupon() {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenParse}`
    });
    console.log(headers);
    return this.httpClient.get('http://localhost:8000/api/user/coupons', { headers: headers });
  }
}
