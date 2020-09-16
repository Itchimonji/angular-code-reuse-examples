import {Component, Input} from '@angular/core';
import {IceCream} from '../interfaces/ice.interface';

@Component({
  selector: 'app-ice-card',
  templateUrl: './ice-card.component.html',
  styleUrls: ['./ice-card.component.scss']
})
export class IceCardComponent {
  @Input() iceCream: IceCream;
}
