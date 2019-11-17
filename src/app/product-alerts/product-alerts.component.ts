import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component. How? 'products' is imported into product-list.component.ts. It's therefore available to be looped over in product-list.component.html. Each 'product' in 'products' is accessible via @Input() in this component because the ProductAlertsComponent is the child of the ProductListComponent. What makes it the child? Because  <app-product-alerts> is included in product-list.component.html.
  @Input() product;

  // This allows the product alert component to emit an event when the value of the notify property changes. The @Output decorator passes data to the component's parent component (in this case ProductAlertsComponent).
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}