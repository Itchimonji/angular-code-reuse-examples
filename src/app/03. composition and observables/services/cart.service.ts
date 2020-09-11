import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IProduct} from '../interfaces/product.interface';

@Injectable({providedIn: 'root'})
export class CartService {
  private subject = new Subject<IProduct>();

  public addToCart(product: IProduct): void {
    this.subject.next(product);
  }

  public getProduct(): Observable<IProduct> {
    return this.subject.asObservable();
  }

  public clearCart(): void {
    this.subject.next();
  }
}
