import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  constructor() { }

  public getRandomNumber(): Observable<number> {
    return of(Math.floor(Math.random() * Math.floor(999999)));
  }
}
