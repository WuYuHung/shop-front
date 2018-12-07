import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  getAll() {
    return this.httpClient.get('http://localhost:8000/api/products');
  }
  getSingle(id) {
    return this.httpClient.get('http://localhost:8000/api/product/' + id);
  }
  postOrder(order) {
    return this.httpClient.post('http://localhost:8000/api/order', order);
  }
  getUser(id) {
    return this.httpClient.get('http://localhost:8000/api/user/' + id);
  }
  getsort(kind, method) {
    return this.httpClient.get('http://localhost:8000/api/products/sort/' + method + '/' + kind);
  }
  postProduct(order_product) {
    return this.httpClient.post('http://localhost:8000/api/order/product', order_product);
  }
  getbuylist(status) {
    return this.httpClient.get(`http://localhost:8000/api/user/orders/${status}/products`);
  }
  getcoupon() {
    return this.httpClient.get('http://localhost:8000/api/user/coupons');
  }
  postmail(email) {
    return this.httpClient.post('http://localhost:8000/api/password/create', email);
  }
  findtoken(token) {
    return this.httpClient.get('http://localhost:8000/api/password/find/' + token);
  }
  postnewpass(data) {
    return this.httpClient.post('http://localhost:8000/api/password/reset', data);
  getrate(id) {
    return this.httpClient.get(`http://localhost:8000/api/product/${id}/ratings`);
  }
  postrate(rating, product_id, description) {
    const tokenParse = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${tokenParse}`
    });
    console.log(headers);
    return this.httpClient.post('http://localhost:8000/api/user/rating', {
      description: description,
      product_id: product_id,
      rating: rating,
      is_buy: 1},
      {
      headers: headers
    });
  }
  getCate(id) {
    return this.httpClient.get(`http://localhost:8000/api/categories`);
  }
}
