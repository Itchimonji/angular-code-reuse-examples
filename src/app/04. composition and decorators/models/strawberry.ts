import {IceCream} from '../interfaces/ice.interface';

export class Strawberry implements IceCream {

  public getPrice(): number {
    return 1.00;
  }

  getType(): string {
    return 'Strawberry';
  }

  getCalories(): number {
    return 98;
  }
}
