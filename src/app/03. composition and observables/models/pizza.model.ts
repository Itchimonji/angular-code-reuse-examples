import {IProduct} from '../interfaces/product.interface';

export class Pizza implements IProduct {

  public getPrice(): number {
    console.log('Pizza for free');
    return 0;
  }
  public getWeight(): number {
    console.log('leightweight');
    return 1200;
  }

  public getName(): string {
    return 'Pizza';
  }
}
