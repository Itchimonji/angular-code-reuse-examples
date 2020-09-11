import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../store/app.reducer';
import {GetRandomNumber} from '../../store/app.actions';
import {Observable, Subject, Subscription} from 'rxjs';
import {selectRandomNumber} from '../../store/app.selectors';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {
  public  randomNumber: number;
  private selectNumber$: Observable<number>;
  private subNumber: Subscription;

  private destroyer$: Subject<void>;

  constructor(protected store: Store<State>) {
    this.destroyer$ = new Subject<void>();
  }

  ngOnInit(): void {
    this.subscribeToRandomNumber();
  }

  ngOnDestroy(): void {
    this.unsubscribeNumber();
  }

  public getRandomNumber() {
    this.store.dispatch(GetRandomNumber());
  }

  protected subscribeToRandomNumber(): void {
    this.selectNumber$ = this.store.select(selectRandomNumber);
    this.subNumber = this.selectNumber$
      .pipe(takeUntil(this.destroyer$))
      .subscribe((next: number) => {
        this.randomNumber = next;
      });
  }

  /*
  @deprecated
   */
  protected unsubscribeNumber(): void {
    if (this.subNumber) {
      this.subNumber.unsubscribe();
    }
  }
}
