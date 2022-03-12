import { Product } from './product.model'

export class SimpleDataSource {
    private _data: Product[];

    constructor() {
        this._data = new Array<Product>(
            new Product({
                code: '100',
                name: 'Cap',
                category: 'Winter wear',
                price: 200
            }),
            new Product({
                code: '200',
                name: 'Jacket',
                category: 'Winter wear',
                price: 1000
            }),
            new Product({
                code: '300',
                name: 'Coat',
                category: 'Winter wear',
                price: 2090
            }),
            new Product({
                code: '400',
                name: 'Gloves',
                category: 'Winter wear',
                price: 100
            }),
            new Product({
                code: '500',
                name: 'Guitar',
                category: 'Musical instruments',
                price: 350
            })
        )
    }

    getData(): Product[] {
        return this._data;
    }
}
