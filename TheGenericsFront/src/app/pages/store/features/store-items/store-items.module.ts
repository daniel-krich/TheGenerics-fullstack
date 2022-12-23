import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreItemsComponent } from './store-items.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsCardCollectionComponent } from './components/items-card-collection/items-card-collection.component';
import { StoreDataService } from '../../store-data-access/store-data.service';
import { CartDataService } from '../../store-data-access/cart-data.service';
import { SharedStoreModule } from '../../shared/shared-store.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    StoreItemsComponent,
    ItemCardComponent,
    ItemsCardCollectionComponent
  ],
  imports: [
    CommonModule,
    SharedStoreModule,
    SharedModule
  ],
  providers: [StoreDataService, CartDataService],
  exports: [StoreItemsComponent]
})
export class StoreItemsModule { }
