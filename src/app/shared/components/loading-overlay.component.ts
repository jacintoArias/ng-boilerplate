import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  template: `
  <div class="wrapper" fxLayout="row" fxLayoutAlign="center center">
    <mat-progress-spinner color="primary" mode="indeterminate" diameter="50"></mat-progress-spinner>
  </div>
  `,
  styles: [
    `
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
  }
  `,
  ],
})
export class LoadingOverlayComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
