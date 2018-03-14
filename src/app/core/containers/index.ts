import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { HomeComponent } from '@app/core/containers/home.component';
import { SidenavComponent } from '@app/core/containers/sidenav.component';

export const containers: any[] = [
  AppComponent,
  CallbackComponent,
  HomeComponent,
  SidenavComponent,
];

export * from './app.component';
export * from './callback.component';
export * from './home.component';
export * from './sidenav.component';
