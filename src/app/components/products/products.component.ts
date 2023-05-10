import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProducts } from '../../models/products';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {ModalComponent} from "../modal/modal.component";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
    products!: IProducts[];
    productsSubscription!: Subscription;
    canEdit: boolean = false;
    constructor(
        private productService: ProductsService,
        public dialog: MatDialog
    ) {
        this.canEdit = true;
    }

    ngOnInit(): void {
        this.productsSubscription = this.productService
            .getProducts()
            .subscribe((data) => (this.products = data));
    }

    ngOnDestroy() {
        if (this.productsSubscription) this.productsSubscription.unsubscribe();
    }

    openDialog() {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.width = "500px";
        dialogConfig.data = this.products

        const dialogRef = this.dialog.open(ModalComponent, dialogConfig);

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
