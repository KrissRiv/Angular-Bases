import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  public counter: number = 0;
  constructor() {}

  decreaseBy(): void {
    this.counter--;
  }

  increaseBy(): void {
    this.counter++;
  }

  reset(): void {
    this.counter = 0;
  }
}
