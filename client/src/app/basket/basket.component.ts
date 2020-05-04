import { BasketService } from './basket.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBasket, BasketItem } from '../shared/models/basket';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItem(item: BasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: BasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: BasketItem) {
    this.basketService.decrementItemQuantity(item);
  }

}
