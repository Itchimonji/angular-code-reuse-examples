import { Component, OnInit } from '@angular/core';
import {AbstractThemeService} from '../models/theme-service.interface';
import {LightThemeService} from './light-theme.service';
import {BaseThemeComponent} from '../base-theme/base-theme.component';

@Component({
  selector: 'app-light-theme',
  templateUrl: './light-theme.component.html',
  styleUrls: ['./light-theme.component.scss'],
  providers: [{
    provide: AbstractThemeService,
    useClass: LightThemeService
  }]
})
export class LightThemeComponent extends BaseThemeComponent implements OnInit {

  constructor(protected themeService: AbstractThemeService) {
    super(themeService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
}
