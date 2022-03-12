import { Component, OnInit } from '@angular/core';

import { Product } from './models/product.model';
import { ProductRepository } from './models/product.repository';


@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.less']
})
export class ManageProductsComponent implements OnInit {
    public repo: ProductRepository;

    constructor() {
        this.repo = new ProductRepository();
    }

    ngOnInit(): void {
    }

    addProduct(product: Product): void {
        this.repo.addProduct(product);
    }
}
