import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private httpClient: HttpClient) { }
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
  }
}
