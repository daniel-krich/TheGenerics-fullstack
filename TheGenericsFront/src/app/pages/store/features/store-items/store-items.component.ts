import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../../shared/interfaces/product.interface';
import { ProductModel } from '../../shared/models/product.model';
import { StoreDataService } from '../../store-data-access/store-data.service';

@Component({
  selector: 'app-store-items',
  templateUrl: './store-items.component.html',
  styleUrls: ['./store-items.component.scss']
})
export class StoreItemsComponent implements OnInit {

    public storeProducts$: Observable<ProductInterface[]>;
    constructor(public storeService: StoreDataService) { 
        this.storeProducts$ = storeService.getStoreProducts();
    }

    ngOnInit(): void {
    }

}
