import { Component, OnInit } from '@angular/core';
import {Vanilla} from '../models/vanilla';
import {Strawberry} from '../models/strawberry';
import {Stracciatella} from '../models/stracciatella';
import {Ice} from '../interfaces/ice.interface';

@Component({
  selector: 'app-imbiss',
  templateUrl: './imbiss.component.html',
  styleUrls: ['./imbiss.component.scss']
})
export class ImbissComponent {

  public getVanilla(): Ice {
    return new Vanilla();
  }

  public getStrawberry(): Ice {
    return new Strawberry();
  }

  public getStracciatella(): Ice {
    return new Stracciatella();
  }

}
