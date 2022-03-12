import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Product, PRODUCT_PARAMS_LIST } from '../models/product.model'


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit {
    public ngModels: string[] = [];
    @Output() product = new EventEmitter<Product>();

    constructor() {
    }

    ngOnInit(): void {
    }

    get paramsList(): string[] {
        return PRODUCT_PARAMS_LIST;
    }

    private resetForm(): void {
        this.ngModels = this.ngModels.map( () => '');
    }

    onSubmit(f: NgForm): void {
        // reset the ngModels when we have an empty value in our form
        // and break function execution so a new product won't be added
        for ( const [k, v] of Object.entries(f.form.value) ) {
            if( (v ?? '') === '') {
                this.resetForm();
                return;
            }
        }

        // the form is not empty (although it could contain empty strings)
        // so we create a product using our form values
        // and add it to the repo using the Output EventEmitter
        // there also is no validation that a valid number was passed for
        // the price parameter (this wasn't defined as a requirement for this assignment)
        this.product.emit(new Product(f.form.value));

        // wasn't apart of the assignment requirements,
        // but I thought it would be nice to reset the form so you can add something else right away
        this.resetForm();
    }
}


