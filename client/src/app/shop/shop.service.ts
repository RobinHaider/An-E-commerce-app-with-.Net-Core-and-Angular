import { environment } from './../../environments/environment';
import { ShopParams } from './../shared/models/shopParams';
import { Type } from './../shared/models/productType';
import { Brand } from './../shared/models/brand';
import { Pagination } from '../shared/models/pagination';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {map, retry} from 'rxjs/operators';
import { Product } from '../shared/models/product';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  baseUrl = environment.apiUrl;
  products: Product[] = [];
  brands: Brand[] = [];
  types: Type[] = [];

  constructor(private http: HttpClient) {}

  getProducts(shopParams: ShopParams) {
    let params = new HttpParams();

    if (shopParams.brandId !== 0) {
      params = params.append('brandId', shopParams.brandId.toString());
    }

    if (shopParams.typeId !== 0) {
      params = params.append('typeId', shopParams.typeId.toString());
    }

    if(shopParams.search){
      params = params.append('search', shopParams.search);
    }

    params = params.append('sort', shopParams.sort);
    params = params.append('pageIndex', shopParams.pageNumber.toString());
    params = params.append('pageSize', shopParams.pageSize.toString());

    return this.http.get<Pagination>(this.baseUrl + 'products', {
      observe: 'response',
      params,
    }).pipe(
      map(response => {
        this.products = response.body.data;
        return response.body;
      })
    );
  }

  getBrands() {
    if(this.brands.length > 0){
      return of(this.brands);
    }

    return this.http.get<Brand[]>(this.baseUrl + 'products/brands').pipe(
      map(response => {
        this.brands = response;
        return response;
      })
    );
  }

  getTypes() {
    if(this.types.length > 0){
      return of(this.types);
    }
    return this.http.get<Type[]>(this.baseUrl + 'products/types').pipe(
      map(response => {
        this.types = response;
        return response;
      })
    );
  }

  getProduct(id: number){
    const product = this.products.find(p => p.id === id);

    if(product){
      return of(product);
    }
    return this.http.get<Product>(this.baseUrl + 'products/' + id);
  }
}
