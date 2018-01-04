import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GithubService } from './services/github.service';
import { GithubApiService } from './services/github-api.service';
import { GithubEffects } from './store/github.effects';
import { reducers } from './store/';

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
      providers: [
        GithubApiService,
        GithubService,
      ]
    };
  }
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('github', reducers),
    EffectsModule.forFeature([GithubEffects]),
  ],
  declarations: []
})
export class RootGithubModule { }
