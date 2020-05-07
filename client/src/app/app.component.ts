import { AccountService } from './account/account.service';
import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SkiNet';

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loadBasket();
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    const token = localStorage.getItem('token');

    this.accountService.loadCurrentUser(token).subscribe(
      () => {
        console.log('loaded user');
      },
      ( error ) => {
        console.log(error);
      }
    );
  }

  loadBasket() {
    const basketId = localStorage.getItem('basket_id');
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(
        () => {
          console.log('Initialized Basket');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
