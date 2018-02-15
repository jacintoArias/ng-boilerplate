import { GithubDataEffects } from './github-data.effects';
import { GithubServiceEffects } from '@app/github/store/effects/github-service.effects';

export const effects: any[] = [GithubDataEffects, GithubServiceEffects];

export * from './github-data.effects';
