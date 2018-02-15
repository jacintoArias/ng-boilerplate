import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z10">
      <span>Jarias Angular Boilerplate</span>
      <ng-content></ng-content>
    </mat-toolbar>
  `,
  styles: [
    `
    mat-toolbar {
      z-index: 10;
    }
  `,
  ],
})
export class ToolbarComponent {
  constructor() {}
}
