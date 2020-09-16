import {IceCream} from '../interfaces/ice.interface';

export class Vanilla implements IceCream {

  public getPrice(): number {
    return 1.10;
  }

  getType(): string {
    return 'Vanilla';
  }

  getCalories(): number {
    return 100;
  }
}
