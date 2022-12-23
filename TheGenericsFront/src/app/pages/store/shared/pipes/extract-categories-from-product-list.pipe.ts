import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategoryEnum, ProductInterface } from '../interfaces/product.interface';

@Pipe({
  name: 'extractCategoriesFromProductList'
})
export class ExtractCategoriesFromProductListPipe implements PipeTransform {

    transform(products: ProductInterface[]): ProductCategoryEnum[] {
        return [...new Set(products.map(x => x.category))];
    }

}
