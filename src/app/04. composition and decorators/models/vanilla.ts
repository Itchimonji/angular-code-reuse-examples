import {Ice} from '../interfaces/ice.interface';

export class Vanilla implements Ice {

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
