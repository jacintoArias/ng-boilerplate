import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { services } from './services';
import { reducers, effects } from './store/';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class GithubModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootGithubModule,
      providers: [ ...services ]
    };
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('github', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: []
})
export class RootGithubModule { }
