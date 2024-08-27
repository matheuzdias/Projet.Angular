import { Component } from '@angular/core';
import { Produtc } from '../produtc';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
      products : Produtc [] = [
      { "id" : 1,
        "name" : "Computador i7",
        "price" : 6000.00,
        "category" : "Eletrônicos"
      },
      { "id" : 1,
        "name" : "Geladeira Brastemp",
        "price" : 5000.00,
        "category" : "Eletrônicos"
      },
      { "id" : 1,
        "name" : "Iphone 15",
        "price" : 4000.00,
        "category" : "Eletrônicos"
      },
    ];
}
