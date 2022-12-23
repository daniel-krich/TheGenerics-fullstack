import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/pages/store/shared/interfaces/product.interface';
import { ProductModel } from 'src/app/pages/store/shared/models/product.model';
import { CartDataService } from 'src/app/pages/store/store-data-access/cart-data.service';
import { StoreDataService } from 'src/app/pages/store/store-data-access/store-data.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

    @Input() public itemId: number | undefined;
    public product: ProductInterface | undefined;
    constructor(public storeService: StoreDataService, private cartService: CartDataService) { }

    ngOnInit(): void {
        if(this.itemId !== undefined) {
            this.product = this.storeService.findProduct(this.itemId);
        }
    }

    public addItemToCart() : void {
        if(this.product !== undefined) {
            try {
                this.cartService.addItem(this.product.id);
            }
            catch(err) {
                alert(err);
            }
            
        }
    }

}
