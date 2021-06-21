import {Component} from "@angular/core";
import {Product} from "../product/product.component";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'menu-page',
  templateUrl: './menu-page.component.html',
})
export class MenuPageComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products=this.productService.getProducts();
  }
}
