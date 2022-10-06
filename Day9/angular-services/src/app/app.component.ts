import { Component } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-services';
    products: Product[] = [];
    productService;

    constructor() {
        this.productService = new ProductService();
    }

    getProducts() {

        this.products = this.productService.getProducts();
    }

    removeProducts() {
        this.products = [];
    }
}
