import { Component, OnInit } from '@angular/core';
import {AbstractThemeService} from '../models/theme-service.interface';
import {DarkThemeService} from './dark-theme.service';
import {BaseThemeComponent} from '../base-theme/base-theme.component';

@Component({
  selector: 'app-dark-theme',
  templateUrl: './dark-theme.component.html',
  styleUrls: ['./dark-theme.component.scss'],
  providers: [{
    provide: AbstractThemeService,
    useClass: DarkThemeService
  }]
})
export class DarkThemeComponent extends BaseThemeComponent implements OnInit {

  constructor(protected themeService: AbstractThemeService) {
    super(themeService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
