import { Component } from '@angular/core';
import { Vanilla } from '../models/vanilla';
import { Strawberry } from '../models/strawberry';
import { Stracciatella } from '../models/stracciatella';
import { IceCream } from '../interfaces/ice.interface';

@Component({
  selector: 'app-imbiss',
  templateUrl: './imbiss.component.html',
  styleUrls: ['./imbiss.component.scss']
})
export class ImbissComponent {

  public getVanilla(): IceCream {
    return new Vanilla();
  }

  public getStrawberry(): IceCream {
    return new Strawberry();
  }

  public getStracciatella(): IceCream {
    return new Stracciatella();
  }

}
