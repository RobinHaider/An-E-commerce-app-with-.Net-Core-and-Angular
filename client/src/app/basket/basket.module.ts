import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket.component';


@NgModule({
  declarations: [BasketComponent],
  imports: [
    CommonModule,
    BasketRoutingModule,
    SharedModule
  ]
})
export class BasketModule { }
