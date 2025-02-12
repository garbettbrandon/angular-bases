import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetBy(10)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>`,
  standalone: false,
})
export class CounterComponent {
  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetBy(value: number): void {
    this.counter = value;
  }
}
