import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingApiService {
  private baseUrl = 'http://localhost:3000/api';
  private productsUrl = 'data/products.json';

  constructor(private http: HttpClient) {}

  login(body: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, body);
  }

  // 📦 READ PRODUCTS (local JSON)
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
}
