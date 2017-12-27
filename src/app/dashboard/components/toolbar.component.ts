import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <mat-toolbar color="primary">
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  styles: []
})
export class ToolbarComponent {

  constructor() { }

}
