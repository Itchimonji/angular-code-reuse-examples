import {IProduct} from '../interfaces/product.interface';

export class IceCream implements IProduct {
  private price: number;
  private weight: number;

  constructor() {
    this.price = 1.30;
    this.weight = 100;
  }

  public getPrice(): number {
    return this.price;
  }
  public getWeight(): number {
    return this.weight;
  }

  public getName(): string {
    return 'Ice cream';
  }
}
