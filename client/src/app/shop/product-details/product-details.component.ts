import { BasketService } from './../../basket/basket.service';
import { ShopService } from './../shop.service';
import { Product } from './../../shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  quantity = 1;

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute,
    private breadcrumbService: BreadcrumbService,
    private basketService: BasketService
  ) {
    this.breadcrumbService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product, this.quantity);
  }

  incrementQuantity(){
    this.quantity++;
  }

  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  loadProduct() {
    this.shopService
      .getProduct(+this.route.snapshot.paramMap.get('id'))
      .subscribe(
        (product) => {
          this.product = product;
          this.breadcrumbService.set('@productDetails', product.name);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
