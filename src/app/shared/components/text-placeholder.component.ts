import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-placeholder',
  template: `
  <div class="text-placeholder"
       *ngFor="let e of elements"
       [ngStyle]="{'width.em': e}"></div>
  `,
  styles: [
    `
    .text-placeholder {
      background: rgb(150, 150, 150);
      border-radius: 20px;
      height: 1em;
      margin-bottom: 0.8em;
    }
  `,
  ],
})
export class TextPlaceholderComponent implements OnInit {
  @Input() lines = 1;
  @Input() width = 12;

  elements: number[];

  constructor() {}

  ngOnInit() {
    const shorter = this.width * 0.2;
    this.elements = Array(this.lines * 1)
      .fill(0)
      .map((x, i) => this.width * 1 - (i % 2) * shorter);
  }
}
