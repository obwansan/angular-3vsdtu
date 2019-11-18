import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  // route is typed as ActivatedRoute.
  // The ActivatedRoute is specific to each routed component loaded by the Angular Router. 
  // It contains information about the route, its parameters (path variables), and additional data associated with the route.
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {

  }

  // Angular calls ngOnInit() shortly after creating a component.
  ngOnInit() {
    // The route parameters (params) correspond to the path variables defined in the route.
    // (Are the path variables of the route - as an object with a get() method - passed into the constructor automagically passed into the subcribe method's params parameter?)
    // The productId is provided from the URL that was matched to the route. 
    // You use the productId to display the details for each unique product.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}