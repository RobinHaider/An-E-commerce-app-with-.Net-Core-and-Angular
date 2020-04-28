import { Pagination } from './models/pagination';
import { Product } from './models/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SkiNet';
  products: Product[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://localhost:5001/api/products')
    .subscribe((response: Pagination) => {
      this.products = response.data;
      console.log(this.products);
    });
  }
}
