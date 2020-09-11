import { Component, OnInit } from '@angular/core';
import {AbstractThemeService} from '../models/theme-service.interface';

@Component({
  selector: 'app-base-theme',
  templateUrl: './base-theme.component.html',
  styleUrls: ['./base-theme.component.scss']
})
export class BaseThemeComponent implements OnInit {

  public font: string;
  public style: string;

  constructor(protected themeService: AbstractThemeService) { }

  ngOnInit(): void {
    this.font = this.themeService.getFontName();
    this.style = this.themeService.getStyleName();
  }

}
