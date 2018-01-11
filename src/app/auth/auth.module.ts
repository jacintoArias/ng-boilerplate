import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { reducers, effects } from './store';
import { services, TokenService } from './services';
import { guards } from './guards';
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
      providers: [...services, ...guards],
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
