import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [value]="baseAmount"> BTC =
    <strong>{{targetAmount}}</strong> CAD
  `,
  styles: [`
    input[type=number] {
      width: 30ex;
      text-align: right;
    }
  `]
})
export class AppComponent {

  baseAmount = 1;
  targetAmount = 1500;

}
