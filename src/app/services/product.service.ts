import {Injectable} from "@angular/core";
import {Product} from "../product/product.component";

@Injectable({providedIn: 'root'})
export class ProductService {

  public getProducts(): Product[] {
    return [{
      title: 'gouda',
      description: 'foarte buna',
      price: 20,
      available: true,
      image: ' '
    },
      {
        title: 'emental',
        description: 'yammy',
        price: 20,
        available: true,
        image: ' '
      },
      {
        title: 'urda',
        description: 'cu rosii',
        price: 20,
        available: true,
        image: ' '
      },
      {
        title: 'telemea',
        description: 'delicioasa',
        price: 20,
        available: true,
        image: ' '
      }
    ];
  }
}
