import { Component, Input } from '@angular/core';
import { IceCream } from '../interfaces/ice.interface';

@Component({
  selector: 'app-ice-cream-card',
  templateUrl: './ice-cream-card.component.html',
  styleUrls: ['./ice-cream-card.component.scss']
})
export class IceCreamCardComponent {
  @Input() iceCream: IceCream;
}
