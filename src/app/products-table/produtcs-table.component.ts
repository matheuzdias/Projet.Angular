import { Component, OnInit } from '@angular/core';
import { Product } from '../produtc';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-produtcs-table',
  templateUrl: './produtcs-table.component.html',
  styleUrl: './produtcs-table.component.css'
})
export class ProductsTableComponent implements OnInit{
  products : Product [] = [];

  constructor(private service: ProductService){}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.service.getProducts().subscribe({
      next: date => this .products = date
  });
  }
  delete(product:Product){
    this.service.delete(product).subscribe({
      next: () => this.loadProducts()
    })
  }

}
