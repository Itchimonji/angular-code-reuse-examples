import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {IProduct} from '../interfaces/product.interface';
import {takeUntil} from 'rxjs/operators';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-cart',
  template: '' +
    '<button (click)="btnClear()">Clear cart</button>\n' +
    '<div *ngFor="let product of cart">\n' +
    '  - {{product.getName()}}, Price: {{product.getPrice()}} Euro, {{product.getWeight()}}g\n' +
    '</div>\n',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  public cart: IProduct[];

  private subShoppingCart: Subscription;
  private onDestroyer$: Subject<void>;

  constructor(private cartService: CartService) {
    this.cart = [];
    this.onDestroyer$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.subShoppingCart = this.cartService.getProduct()
      .pipe(takeUntil(this.onDestroyer$))
      .subscribe((next: IProduct) => {
        if (next) {
          this.cart.push(next);
        } else {
          this.cart = [];
        }
      });
  }

  ngOnDestroy() {
    this.onDestroyer$.next();
    this.onDestroyer$.complete();
  }

  public btnClear(): void {
    this.cartService.clearCart();
  }
}
