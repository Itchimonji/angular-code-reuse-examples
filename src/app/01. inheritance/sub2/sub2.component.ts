import {Component, OnDestroy, OnInit} from '@angular/core';
import {BaseComponent} from '../base/base.component';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.reducer';

@Component({
  selector: 'app-sub2',
  templateUrl: './sub2.component.html',
  styleUrls: ['./sub2.component.scss']
})
export class Sub2Component extends BaseComponent implements OnInit, OnDestroy {

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
