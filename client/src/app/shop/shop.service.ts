import { Pagination } from '../shared/models/pagination';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Pagination>(this.baseUrl + 'products?pageSize=50');
  }
}
