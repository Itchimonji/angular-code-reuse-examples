import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';
import {IProduct} from '../interfaces/product.interface';
import {IceCream} from '../models/ice-cream.model';
import {Pizza} from '../models/pizza.model';
import {Juice} from '../models/juice.model';

@Component({
  selector: 'app-supermarket',
  template: '<h2>Supermarket</h2>\n' +
    '<button (click)="btnAddIceCream()">Add ice cream</button>\n' +
    '<button (click)="btnAddPizza()">Add pizza</button>\n' +
    '<button (click)="btnAddJuice()">Add juice</button>',
  styleUrls: ['./supermarket.component.scss']
})
export class SupermarketComponent {

  constructor(private cartService: CartService) { }

  public btnAddIceCream() {
    this.addToCart(new IceCream());
  }

  public btnAddPizza() {
    this.addToCart(new Pizza());
  }

  public btnAddJuice() {
    this.addToCart(new Juice());
  }

  public addToCart(product: IProduct): void {
    this.cartService.addToCart(product);
  }
}
