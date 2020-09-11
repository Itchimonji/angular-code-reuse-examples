import { Injectable } from '@angular/core';
import {Color} from '../interfaces/color.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public paint(color: Color): string {
    return color.paint();
  }
}
