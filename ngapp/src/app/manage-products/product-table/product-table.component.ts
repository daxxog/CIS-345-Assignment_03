import { Input, Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductRepository } from '../models/product.repository';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.less']
})
export class ProductTableComponent implements OnInit {
    @Input('repo') repo: ProductRepository = new ProductRepository();

    constructor() {
    }

    ngOnInit(): void {
    }

    get products(): Product[] {
        return this.repo.getProducts();
    }

    deleteProduct(product: Product): void {
        this.repo.deleteProduct(product);
    }
}
