import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.reducer';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.scss']
})
export class SubComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(protected store: Store<State>) {
    super(store);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
