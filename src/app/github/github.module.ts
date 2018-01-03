import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { GithubService } from '@app/github/services/github.service';
import { GithubApiService } from '@app/github/services/github-api.service';
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
    EffectsModule.forFeature(effects),
  ],
  declarations: []
})
export class RootGithubModule { }
