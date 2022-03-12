import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ProductFormComponent } from './manage-products/product-form/product-form.component';
import { ProductTableComponent } from './manage-products/product-table/product-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageProductsComponent,
    ProductFormComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
