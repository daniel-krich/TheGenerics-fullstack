import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategoryEnum, ProductInterface } from '../interfaces/product.interface';

@Pipe({
  name: 'extractItemsFromProductCategory'
})
export class ExtractItemsFromProductCategoryPipe implements PipeTransform {

    transform(products: ProductInterface[], category: ProductCategoryEnum): ProductInterface[] {
        return products.filter(x => x.category == category);
    }

}
