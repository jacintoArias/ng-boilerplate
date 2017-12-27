import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <mat-sidenav mode="side" [opened]="open">
      <mat-nav-list>
        <ng-content></ng-content>
      </mat-nav-list>
    </mat-sidenav>
  `,
  styles: [],
})
export class SidenavComponent {
  @Input() open = true;
}
