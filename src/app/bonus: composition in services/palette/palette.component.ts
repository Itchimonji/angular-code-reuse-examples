import { Component } from '@angular/core';
import {ColorService} from '../services/color.service';
import {Color} from '../interfaces/color.interface';
import { Yellow } from '../models/yellow.model';
import { Red } from '../models/red.model';
import { Purple } from '../models/purple.model';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent {

  private color: Color;

  constructor(private colorService: ColorService) { }

  public useRed(): void {
    this.color = new Red();
  }

  public usePurple(): void {
    this.color = new Purple();
  }

  public useYellow(): void {
    this.color = new Yellow();
  }

  public paint(): void {
    console.log( this.colorService.paint(this.color));
  }

}
