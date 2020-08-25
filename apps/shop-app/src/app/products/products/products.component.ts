import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ub-shop-forontend-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}
}
