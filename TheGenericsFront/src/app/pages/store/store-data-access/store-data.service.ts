import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductCategoryEnum, ProductInterface } from "../shared/interfaces/product.interface";
import { ProductModel } from '../shared/models/product.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL } from 'src/app/core/consts';

@Injectable()
export class StoreDataService {

    private _storeProducts$: BehaviorSubject<ProductInterface[]> = new BehaviorSubject<ProductInterface[]>([]);

    constructor(private httpClient: HttpClient) {

         httpClient.get<ProductInterface[]>(BASE_URL + '/api/products')
                    .pipe(map(x => x.map(y => new ProductModel(y.id, y.name, y.imageLink, y.price, y.category))))
                    .subscribe(x => this._storeProducts$.next(x));
    }

    public getStoreProducts(): Observable<ProductInterface[]> {
        return this._storeProducts$;
    }

    public findProduct(itemId: number) : ProductInterface | undefined {
        let products: ProductInterface[] = this._storeProducts$.value;

        return products.find(x => x.id == itemId)
    }
}
