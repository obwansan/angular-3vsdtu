import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component. How? 'products' is imported into product-list.component.ts. It's therefore available to be looped over in product-list.component.html. Each 'product' in 'products' is accessible via @Input() in this component because the ProductAlertsComponent is the child of the ProductListComponent. What makes it the child? Because  <app-product-alerts> is included in product-list.component.html.
  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}