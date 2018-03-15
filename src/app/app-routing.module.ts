import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent, HomeComponent } from '@app/core/containers';
import { AuthGuard, UserPreloadGuard } from '@app/auth/guards';

export const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard, UserPreloadGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
