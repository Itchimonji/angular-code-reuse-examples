import { Injectable } from '@angular/core';
import {AbstractThemeService} from '../models/theme-service.interface';

@Injectable()
export class DarkThemeService implements AbstractThemeService {

  getFontName(): string {
    return 'Arial';
  }

  getStyleName(): string {
    return 'dark';
  }
}
