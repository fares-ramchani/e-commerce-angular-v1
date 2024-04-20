import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const STORAGE_KEY = 'counter';
@Injectable({
  providedIn: 'root'
})
export class AddService {
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();
  constructor()
  {
    const savedCount = localStorage.getItem(STORAGE_KEY);
    if (savedCount !== null) {
      this.countSubject.next(+savedCount);
    }
  }
  increment() {
    const currentCount = this.countSubject.value;
    const newCount = currentCount + 1;
    localStorage.setItem(STORAGE_KEY, newCount.toString());
    this.countSubject.next(newCount);
  }
  Disincriment()
  {
    const currentCount = this.countSubject.value;
    const newCount = currentCount - 1;
    localStorage.setItem(STORAGE_KEY, newCount.toString());
    this.countSubject.next(newCount);
  }
}
