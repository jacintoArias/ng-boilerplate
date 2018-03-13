import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallbackComponent, HomeComponent } from '@app/core/containers';
import { AuthGuard, UserLoadedGuard } from '@app/auth/guards';

export const routes: Routes = [
  {
    path: 'callback',
    component: CallbackComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard, UserLoadedGuard],
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
