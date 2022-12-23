import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryEnum, ProductInterface } from 'src/app/pages/store/shared/interfaces/product.interface';
import { StoreDataService } from 'src/app/pages/store/store-data-access/store-data.service';

@Component({
  selector: 'app-items-card-collection',
  templateUrl: './items-card-collection.component.html',
  styleUrls: ['./items-card-collection.component.scss']
})
export class ItemsCardCollectionComponent implements OnInit {

    @Input() public products!: ProductInterface[];
    @Input() public productsCategory: ProductCategoryEnum | undefined;
    public productsCategoryName: string | undefined;

    constructor(public storeService: StoreDataService) { 
    }

    ngOnInit(): void {
        if(this.productsCategory !== undefined) {
            this.productsCategoryName = ProductCategoryEnum[this.productsCategory];
        }
    }

}
