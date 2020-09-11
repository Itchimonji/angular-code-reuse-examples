import { Injectable } from '@angular/core';
import {AbstractThemeService} from '../models/theme-service.interface';

@Injectable()
export class LightThemeService implements AbstractThemeService {

  getFontName(): string {
    return 'Comic Sans MS';
  }

  getStyleName(): string {
    return 'light';
  }
}
