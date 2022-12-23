import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { StoreComponent } from './store.component';
import { StoreItemsModule } from './features/store-items/store-items.module';
import { StoreCartModule } from './features/store-cart/store-cart.module';
import { StoreDataService } from './store-data-access/store-data.service';
import { CartDataService } from './store-data-access/cart-data.service';
import { StoreDataAccessModule } from './store-data-access/store-data-access.module';
import { SharedStoreModule } from './shared/shared-store.module';
import { routes } from './store.routes';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StoreDataAccessModule,
    StoreItemsModule,
    SharedStoreModule,
    HttpClientModule,
    StoreCartModule,
    SharedModule
  ],
  providers: [StoreDataService, CartDataService],
  exports: [RouterModule]
})
export class StoreModule { }
