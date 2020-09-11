import {IProduct} from '../interfaces/product.interface';

export class Juice implements IProduct {

  public getPrice(): number {
    return 15.23 - 7.30;
  }
  public getWeight(): number {
    return 8.00 - 3.33;
  }

  public getName(): string {
    return 'Juice';
  }
}
