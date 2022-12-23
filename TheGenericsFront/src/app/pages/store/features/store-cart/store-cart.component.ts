import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../shared/interfaces/product.interface';
import { CartProductModel } from '../../shared/models/cart-product.model';
import { ProductModel } from '../../shared/models/product.model';
import { CartDataService } from '../../store-data-access/cart-data.service';
import { StoreDataService } from '../../store-data-access/store-data.service';

@Component({
  selector: 'app-store-cart',
  templateUrl: './store-cart.component.html',
  styleUrls: ['./store-cart.component.scss']
})
export class StoreCartComponent implements OnInit {

    public cart$: Observable<CartProductModel[]>;
    public store$: Observable<ProductInterface[]>;

    constructor(public cartService: CartDataService, public storeService: StoreDataService) {
        this.cart$ = cartService.getCartItems();
        this.store$ = storeService.getStoreProducts();
    }

    ngOnInit(): void {
    }

    public onPurchase(cart: CartProductModel[]): void {
        if(cart.length) {
            alert(`Thank you for your purchase ($${this.cartService.cartPriceTotal})`);
            this.cartService.clearCart();
        }
        else {
            alert('Cart empty');
        }
        
    }

}
