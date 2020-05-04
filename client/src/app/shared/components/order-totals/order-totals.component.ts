import { BasketService } from './../../../basket/basket.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BasketTotals } from '../../models/basket';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.scss']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$: Observable<BasketTotals>;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}
