import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { CallbackComponent } from './callback.component';
import { AuthGuard } from '@app/auth';

export const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: '',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
