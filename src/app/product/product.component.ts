import { Component } from '@angular/core';

export interface Product {
  title: string;
  describe: string;
  price:number;
  available:boolean;
  image: string;
}

@Component({
  selector:'product',
  templateUrl: './product.component.html',
})

export class ProductComponent {

}

