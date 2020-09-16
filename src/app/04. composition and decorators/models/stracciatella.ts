import {IceCream} from '../interfaces/ice.interface';

export class Stracciatella implements IceCream {

  public getPrice(): number {
    return 1.20;
  }

  getType(): string {
    return 'Stracciatella';
  }

  getCalories(): number {
    return 114;
  }
}
