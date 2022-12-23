import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtractCategoriesFromProductListPipe } from './pipes/extract-categories-from-product-list.pipe';
import { ExtractItemsFromProductCategoryPipe } from './pipes/extract-items-from-product-category.pipe';



@NgModule({
  declarations: [
    ExtractCategoriesFromProductListPipe,
    ExtractItemsFromProductCategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ExtractCategoriesFromProductListPipe, ExtractItemsFromProductCategoryPipe]
})
export class SharedStoreModule { }
