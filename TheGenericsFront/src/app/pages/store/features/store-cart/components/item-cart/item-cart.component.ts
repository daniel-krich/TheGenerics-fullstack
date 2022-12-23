import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { ProductInterface } from 'src/app/pages/store/shared/interfaces/product.interface';
import { CartProductModel } from 'src/app/pages/store/shared/models/cart-product.model';
import { ProductModel } from 'src/app/pages/store/shared/models/product.model';
import { CartDataService } from 'src/app/pages/store/store-data-access/cart-data.service';
import { StoreDataService } from 'src/app/pages/store/store-data-access/store-data.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {

    @Input() public cartProduct!: CartProductModel;

    public product$: Observable<ProductInterface | undefined>;
    constructor(private cartService: CartDataService, private storeService: StoreDataService) { 
        this.product$ = storeService.getStoreProducts().pipe(map(x => x.find(y => y.id == this.cartProduct.productId)));
    }

    ngOnInit(): void {
    }

    public onUpdateCartQuantity(inputElement: HTMLInputElement): void {
        if(+inputElement.value > 0) {
            this.cartService.modifyItem(this.cartProduct.productId, +inputElement.value);
        }
        else {
            this.cartService.modifyItem(this.cartProduct.productId, 1);
            inputElement.value = (1).toString();
        }
    }

    public onRemoveItemFromCart(): void {
        this.cartService.removeItem(this.cartProduct.productId);
    }

}
