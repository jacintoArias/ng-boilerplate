import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { environment } from '@env/environment';
import { AuthService } from './services/auth.service';
import { Auth0Service } from './services/auth0.service';
import { TokenService } from './services/token.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/';


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
        AuthService,
        Auth0Service,
        TokenService,
        AuthGuard,
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
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: []
})
export class RootAuthModule { }
