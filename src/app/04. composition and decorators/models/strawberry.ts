import {Ice} from '../interfaces/ice.interface';

export class Strawberry implements Ice {

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
