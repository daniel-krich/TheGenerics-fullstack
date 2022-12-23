import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BASE_URL } from 'src/app/core/consts';
import { CartProductInterface } from '../shared/interfaces/cart-product.interface';
import { ProductInterface } from '../shared/interfaces/product.interface';
import { CartProductModel } from '../shared/models/cart-product.model';
import { ProductModel } from '../shared/models/product.model';
import { StoreDataService } from './store-data.service';

@Injectable()
export class CartDataService {

    private _cartItems$: BehaviorSubject<CartProductModel[]> = new BehaviorSubject<CartProductModel[]>([]);
    
    constructor(private storeService: StoreDataService, private httpClient: HttpClient) {
        httpClient.get<CartProductInterface[]>(BASE_URL + '/api/shoppingcart').pipe(map(x => x.map(y => new CartProductModel(y.productId, y.productQuantity))))
                    .subscribe(x => this._cartItems$.next(x));
    }

    public addItem(itemId: number) : void {
        const product: ProductInterface | undefined = this.storeService.findProduct(itemId);
        if(product) {
            const cartProduct: CartProductModel | undefined = this._cartItems$.value.find(x => x.productId == itemId);
            if(!cartProduct) {
                this.httpClient.post<Boolean>(BASE_URL + '/api/shoppingcart', new CartProductModel(itemId, 1))
                    .subscribe(x => {
                        if(x) {
                            this._cartItems$.next([...this._cartItems$.value, new CartProductModel(itemId, 1)]);
                        }
                    },
                    (e: Error) => {
                        throw new Error(`Request error (${e.message})`);
                    });
                
            }
            else {
                throw new Error('Item already exists in cart');
            }
        }
    }

    public removeItem(itemId: number) : void {
        this.httpClient.delete<Boolean>(BASE_URL + '/api/shoppingcart/remove/' + itemId)
            .subscribe(x => {
                if(x) {
                    this._cartItems$.next(this._cartItems$.value.filter(x => x.productId != itemId));
                }
            },
            (e: Error) => {
                throw new Error(`Request error (${e.message})`);
            });
    }

    public modifyItem(itemId: number, quantity: number) : void {
        const cartProduct: CartProductModel | undefined = this._cartItems$.value.find(x => x.productId == itemId);
        if(cartProduct) {
            this.httpClient.put<Boolean>(BASE_URL + '/api/shoppingcart', new CartProductModel(itemId, quantity))
                .subscribe(x => {
                    if(x) {
                        cartProduct.productQuantity = quantity;
                    }
                },
                (e: Error) => {
                    throw new Error(`Request error (${e.message})`);
                });
            
        }
        else {
            throw new Error("Item doesn't exist in cart");
        }
    }

    public clearCart() : void {
        this.httpClient.get(BASE_URL + '/api/shoppingcart/clearcart')
            .subscribe(_ => {
                this._cartItems$.next([]);
            },
            (e: Error) => {
                throw new Error(`Request error (${e.message})`);
            });
    }

    public getCartItems() : Observable<CartProductModel[]> {
        return this._cartItems$;
    }

    public get cartPriceTotal() : number {
        //return +this._cartItems.reduce((acc, curr) => acc + (curr.price * curr.productQuantity), 0).toFixed(2);
        
        return +this._cartItems$.value.reduce((acc, curr) => {
            let product = this.storeService.findProduct(curr.productId);
            if(product)
                return acc + (product.price * curr.productQuantity);
            return acc;
        }, 0).toFixed(2);
    }
}
