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
}
