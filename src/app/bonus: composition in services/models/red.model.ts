import {Color} from '../interfaces/color.interface';

export class Red implements Color {
  public paint(): string {
    return 'red';
  }
}
