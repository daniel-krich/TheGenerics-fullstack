import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreCartComponent } from './store-cart.component';
import { ItemCartComponent } from './components/item-cart/item-cart.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StoreCartComponent,
    ItemCartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [StoreCartComponent]
})
export class StoreCartModule { }
