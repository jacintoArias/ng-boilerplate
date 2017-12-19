import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { HomeComponent } from './home.component';
import { MainComponent } from './containers/main.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: '**',
        redirectTo: '/main',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}

