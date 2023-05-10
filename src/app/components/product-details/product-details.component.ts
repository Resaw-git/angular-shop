import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
    product!: IProducts;
    productSubscription!: Subscription;
    isFavourite: boolean = false;
    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.productSubscription = this.route.data.subscribe((data) => {
            this.product = data['data'];
        });
    }

    toggleFavourite() {
        this.isFavourite = !this.isFavourite
    }
    toUpperFirstLetter(str: string): string {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
}
