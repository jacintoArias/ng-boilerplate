import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { reducers, effects } from './store';
import { Auth0Service } from './services/auth0.service';
import { TokenService } from '@app/auth/services/token.service';
import { AuthGuard } from './guards/auth.guard';

import { environment } from '@env/environment';


export function jwtOptionsFactory(tokenService) {
  return {
    tokenGetter: () => {
      return tokenService.getAccessToken().toPromise();
    },
    whitelistedDomains: environment.jwtOptions.whitelistedDomains,
  };
}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  exports: [],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [
        Auth0Service,
        AuthGuard,
        TokenService,
      ],
    };
  }
}

@NgModule({
  imports: [
    CommonModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [TokenService]
      }
    }),
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: []
})
export class RootAuthModule { }
