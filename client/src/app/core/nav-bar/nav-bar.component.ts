import { AccountService } from './../../account/account.service';
import { BasketService } from './../../basket/basket.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/shared/models/basket';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket>;
  currentUser$: Observable<User>;

  constructor(
    private basketService: BasketService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  logout(){
    this.accountService.logout();
  }
}
