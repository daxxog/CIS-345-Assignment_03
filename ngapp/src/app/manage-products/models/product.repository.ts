import { SimpleDataSource } from './datasource.model'
import { Product } from './product.model'

export class ProductRepository {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        // create a deep copy of the data in the SimpleDataSource
        this.products = (
            this.dataSource = new SimpleDataSource()
        ).getData().map(product => product.copy);
    }

    // create
    addProduct(product: Product): void {
        this.products.push(product);
    }

    // read
    getProducts(): Product[] {
        return this.products;
    }

    // update
    // {not implemented} //

    // delete
    deleteProduct(_product: Product): void {
        this.products = this.products.filter(
            product => !( product == _product )
        );
    }
}
