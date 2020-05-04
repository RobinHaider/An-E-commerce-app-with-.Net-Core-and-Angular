import { BasketService } from './../../basket/basket.service';
import { Product } from '../../shared/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product);
  }

}
