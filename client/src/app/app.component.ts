import { BasketService } from './basket/basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SkiNet';

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id');
    if(basketId){
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('Initialized Basket');
      }, error => {
        console.log(error);
      });
    }
  }
}
